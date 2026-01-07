import { db } from "@/config/db";
import { openrouter } from "@/config/openRouter-config";
import { projectTable, screenConfigTable } from "@/config/schema";
import { APP_LAYOUT_CONFIG_PROMPT } from "@/data/prompt";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const { userInput, device, projectId } = await request.json();

    const aiResult = await openrouter.chat.send({
        model: "cognitivecomputations/dolphin-mistral-24b-venice-edition:free",
        messages: [
            {
                "role": "system",
                content: [
                    {
                        type: "text",
                        text: APP_LAYOUT_CONFIG_PROMPT.replace("{deviceType}", device)
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
    let aiContent = aiResult?.choices[0]?.message?.content as string;

    aiContent = aiContent.replace(/^```(?:json)?\s*/i, '').replace(/```\s*$/, '');
    let AIJSONResult;
    try {
        AIJSONResult = JSON.parse(aiContent);
    } catch (e) {
        console.error("Failed to parse AI response as JSON", aiContent, e);
        return NextResponse.json({ error: "Invalid AI response format", details: aiContent }, { status: 500 });
    }
    console.log("AI Result:", aiResult);

    if(AIJSONResult){
        await db.update(projectTable).set({
            projectName: AIJSONResult?.projectName,
            theme: AIJSONResult?.theme,
            projectVisualDescription: AIJSONResult?.projectVisualDescription
        }).where(eq(projectTable.projectId, projectId as string));

    AIJSONResult?.screens.forEach(async (screen: any) => {
        const result = await db.insert(screenConfigTable).values({
            projectId: projectId,
            purpose: screen.purpose,
            screenId: screen.id,
            screenName: screen.name,
            screenDescription: screen.layoutDescription,
        }).returning();

    })

    return NextResponse.json(AIJSONResult);
       }else{
        return NextResponse.json({ error: "No AI response received" }, { status: 500 });
       }

}