import { db } from "@/config/db";
import { openrouter } from "@/config/openRouter-config";
import { screenConfigTable } from "@/config/schema";
import { GENERATION_SCREEN_PROMPT } from "@/data/prompt";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const { projectId, screenId, screenName, purpose, screenDescription, projectVisualDescription } = await request.json();
    const userInput = `screenName is ${screenName},
    screen Purpose is ${purpose},
    screen Description is ${screenDescription}
    `

    try {

        const aiResult = await openrouter.chat.send({
            model: "cognitivecomputations/dolphin-mistral-24b-venice-edition:free",
            messages: [
                {
                    "role": "system",
                    content: [
                        {
                            type: "text",
                            text: GENERATION_SCREEN_PROMPT
                        }
                    ]
                },
                {
                    "role": "user",
                    "content": userInput
                }
            ],
            stream: false
        });


        let code = aiResult?.choices[0]?.message?.content as string;
      
        code = code.replace(/^```(?:[a-zA-Z]+)?\s*/i, '').replace(/```\s*$/, '');
        const updateResult = await db.update(screenConfigTable).set({
            code: code
        }).where(and(eq(screenConfigTable.projectId, projectId as string),
         eq(screenConfigTable.screenId, screenId as string))).returning();

        return NextResponse.json(updateResult[0], { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "No AI response received" }, { status: 500 });
    }
}