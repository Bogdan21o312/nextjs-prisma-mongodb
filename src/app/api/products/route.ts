import { NextResponse } from 'next/server';
import prisma from './../prismadb';

export async function GET() {
    const products = await prisma.product.findMany();
    return NextResponse.json(products);
}

export async function POST(request: Request) {
    const body = await request.json();

    const { title, description, categories } = body;

    const product = await prisma.product.create({
        data: {
            title,
            description,
        },
    });

    if (categories && categories.length > 0) {
        for (const categoryId of categories) {
            await prisma.categoryToProduct.create({
                data: {
                    category: { connect: { id: categoryId } },
                    product: { connect: { id: product.id } },
                },
            });
        }
    }

    return NextResponse.json(product);
}
