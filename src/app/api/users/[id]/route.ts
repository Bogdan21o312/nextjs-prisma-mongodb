import {NextResponse} from 'next/server'
import prisma from './../../prismadb'

interface IParams {
    id?: string
}

export async function GET(request: Request, {params}: { params: IParams }) {
    const {id} = params
    const user = await prisma.user.findFirstOrThrow({
        where: {
            id: id,
        },
    });
    return NextResponse.json(user);
}

export async function PUT(request: Request, {params}: { params: IParams }) {
    const {id} = params

    const body = await request.json()

    const {
        name,
        email,
    } = body

    const updated = await prisma.user.update({
        where: {
            id: id,
        },
        data: {
            name,
            email,
        }
    })

    return NextResponse.json(updated)
}

export async function DELETE(request: Request, {params}: { params: IParams }) {
    const {id} = params


    const deleted = await prisma.user.delete({
        where: {
            id: id,
        },
    })

    return NextResponse.json(deleted)
}
