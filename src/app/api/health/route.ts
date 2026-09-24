import { NextResponse } from "next/server";
import { readHealth } from "@/lib/health";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json(readHealth(), {
    headers: { "Cache-Control": "no-store" },
  });
}
