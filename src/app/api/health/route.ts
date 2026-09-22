import {NextResponse} from "next/server";
import { uptime } from "process";

export async function GET() {
    return NextResponse.json({status:"ok", uptime:process.uptime()});
}