import { db } from "@/config/db";
import { projectTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
     const{userInput, device, projectId} = await request.json()

     const user = await currentUser()

     const result = await db.insert(projectTable).values({
         projectId: projectId,
        userId: user?.primaryEmailAddress?.emailAddress as string,
        userInput: userInput,
        device: device,
     }).returning()

        return NextResponse.json(result[0] ?? {});
}