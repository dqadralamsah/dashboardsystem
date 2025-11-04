import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

//  GET
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get('page') || '1';
  const limit = searchParams.get('limit') || '10';
  const offset = searchParams.get('offset') || '0';
  const search = searchParams.get('search') || '';

  try {
    const res = await axios.get('http://localhost:8001/api/web/v1/products', {
      params: { page, limit, offset, search },
    });

    return NextResponse.json(res.data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST
export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const res = await axios.post('http://localhost:8001/api/web/v1/product', body);
    return NextResponse.json(res.data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
