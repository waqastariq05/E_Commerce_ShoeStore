import { NextResponse } from "next/server";
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export const dynamic = 'force-dynamic';

export async function POST(req) {
    try {
        const res = await req.json()

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: res,
            mode: 'payment',
            success_url: 'http://localhost:3000/checkout/?success=true',
            // success_url: `${req.headers.origin}/?success=true`,
            // cancel_url: `${req.headers.origin}/?canceled=true`,
            cancel_url: 'http://localhost:3000/checkout/?canceled=true',
        });
        return NextResponse.json({
            success: true,
            id: session.id,
        })
    } catch (error) {
        return NextResponse.json({
            status: 500,
            success: false,
            message: error
        })
    }
}