import {NextResponse} from 'next/server'
import prisma from './../prismadb'

export async function GET() {
    const categories = await prisma.category.findMany();
    return NextResponse.json(categories);
}

export async function POST(request: Request) {

    const body = await request.json();

    const {
        name,
    } = body

    const categories = await prisma.category.create({
        data: {
            name
        }
    })

    return NextResponse.json(categories)
}
