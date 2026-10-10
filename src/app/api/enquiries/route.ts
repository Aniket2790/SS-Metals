import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (body.website) {
    return NextResponse.json({ ok: true });
  }
  if (!body.name || !body.message || !body.phone) {
    return NextResponse.json({ error: "Please fill required fields." }, { status: 400 });
  }
  // Stub: accept enquiry (wire to email/CRM when ready).
  console.info("[enquiry]", body);
  return NextResponse.json({ ok: true });
}
