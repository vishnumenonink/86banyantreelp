import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyeHsTvrbgjvzwcIrPd7neVePyoeYsz5dAfrIJ5u4m5tZW0CHbDdfd85DB3dTh3l6bc/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await res.text();
    let data: any;
    try {
      data = JSON.parse(text);
    } catch {
      data = { raw: text };
    }

    console.log("Apps Script HTTP status:", res.status);
    console.log("Apps Script payload:", data);

    const success = data.status === "success";

    return NextResponse.json(
      {
        ok: success,
        scriptHttpStatus: res.status,
        ...data,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Error in API route:", err);
    return NextResponse.json(
      {
        ok: false,
        status: "error",
        message: err?.message || "Unknown error",
      },
      { status: 200 }
    );
  }
}
