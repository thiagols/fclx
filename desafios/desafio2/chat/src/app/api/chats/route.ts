import { prisma } from "@/app/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    
    const {message} = await request.json()


    const chatCreated = await prisma.chat.create({
        data: {message: JSON.stringify(message)},
    });

    return NextResponse.json(chatCreated);
}

export async function GET(request: NextRequest){
    const chats = await prisma.chat.findMany({});

    return NextResponse.json(chats);
}