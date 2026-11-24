import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
    const { id: [userid, single] } = await params;
    const query = request.nextUrl.searchParams;
    const q = query.get("q");

    return NextResponse.json({ id: { userid, single }, q })
}