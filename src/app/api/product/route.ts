import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

// GET
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const product_id = searchParams.get('product_id');

  if (!product_id) {
    return NextResponse.json({ error: 'product_id is required' }, { status: 400 });
  }

  try {
    const res = await axios.get(`http://localhost:8001/api/web/v1/product`, {
      params: { product_id },
    });
    return NextResponse.json(res.data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// PUT
export async function PUT(req: NextRequest) {
  const body = await req.json();
  const product_id = body.product_id;

  if (!product_id) {
    return NextResponse.json({ error: 'product_id is required' }, { status: 400 });
  }

  try {
    const res = await axios.put(`http://localhost:8001/api/web/v1/product`, body);
    return NextResponse.json(res.data);
  } catch (err: any) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
