import { db } from "@/config/db";
import { projectTable, screenConfigTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
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

export async function GET(request: NextRequest) {
   const projectId = request.nextUrl.searchParams.get('projectId');
   const user = await currentUser();

   try{
      const result  = await db.select().from(projectTable)
      .where(and(eq(projectTable.projectId, projectId as string),
                eq(projectTable.userId, user?.primaryEmailAddress?.emailAddress as string)
      ))
      const screenConfig =await db.select().from(screenConfigTable)
      .where(eq(screenConfigTable.projectId, projectId as string));

      return NextResponse.json({projectDetail: result[0], screenConfig:screenConfig});
   }catch(err){
    console.log("Error in fetching project details", err);
    return NextResponse.json({error: "Failed to fetch project details"}, {status:500} );
   }
}