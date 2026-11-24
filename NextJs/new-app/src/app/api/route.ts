import { NextResponse } from "next/server";

const data = [{ id: 1, name: "karthi" }, { id: 2, name: "nihal" }];

export async function GET() {
    return NextResponse.json(data)
}