import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const googleUrl = "https://script.google.com/macros/s/AKfycbz1hYA3C0PSaruZq6PkcegqjvyPD04sROvp0E30apbKVR3uCVLiklYaSB7ns2VLz7y1/exec";

    const res = await fetch(googleUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await res.text();

    if (!res.ok) {
      return new NextResponse(text || "Upstream error", { status: res.status });
    }

    return NextResponse.json({ ok: true, result: text });
  } catch (err) {
    console.error("/api/contact error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}
