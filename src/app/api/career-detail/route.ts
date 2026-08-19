import { type NextRequest, NextResponse } from "next/server";
import { fetchCareerDetail } from "@/lib/insights/api";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ detail: null }, { status: 400 });
  }

  const detail = await fetchCareerDetail(id);
  return NextResponse.json({ detail });
}
