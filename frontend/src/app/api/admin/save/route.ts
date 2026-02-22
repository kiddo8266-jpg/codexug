import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");
  if (session?.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { content } = await req.json();
  const filePath = path.join(process.cwd(), "public", "content.json");
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
  return NextResponse.json({ success: true });
}
