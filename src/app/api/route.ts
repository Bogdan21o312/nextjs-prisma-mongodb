import { NextResponse } from 'next/server'
import prisma from './prismadb'

export async function GET() {
    try {
        const users = await prisma.user.findMany();
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error: 'Помилка сервера' }, { status: 500 });
    }
}
export async function POST (request:Request) {

    const body = await request.json();

    const {
        email,
        name,
        createdAt,
        updatedAt,
    } = body

    const course = await prisma.user.create({
        data: {
            email,
            name,
            createdAt,
            updatedAt,
        }
    })

    return NextResponse.json(course)
}
