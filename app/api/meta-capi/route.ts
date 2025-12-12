// app/api/meta-capi/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const accessToken = process.env.META_CAPI_TOKEN;
    const pixelId = process.env.META_PIXEL_ID; // <-- make sure this is set in .env.local

    if (!accessToken || !pixelId) {
      return NextResponse.json(
        {
          ok: false,
          error: "Missing META_CAPI_TOKEN or META_PIXEL_ID env var",
        },
        { status: 500 }
      );
    }

    const body = await req.json();

    const {
      event_name = "Lead",
      event_id,
      event_source_url,
      fbp,
      fbc,
      email_sha256,
      phone_sha256,
    } = body || {};

    // Get IP + UA
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "";
    const ua = req.headers.get("user-agent") || "";

    const payload = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          event_id, // for dedupe with Pixel
          action_source: "website",
          event_source_url,
          user_data: {
            client_ip_address: ip,
            client_user_agent: ua,
            fbp,
            fbc,
            em: email_sha256 ? [email_sha256] : undefined,
            ph: phone_sha256 ? [phone_sha256] : undefined,
          },
        },
      ],
    };

    const url = `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${accessToken}`;

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const json = await resp.json();

    return NextResponse.json({ ok: true, meta: json }, { status: 200 });
  } catch (e: any) {
    console.error("Meta CAPI error:", e);
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
