import searchBooks from '@/lib/providers/search-books';
import { NextRequest, NextResponse } from 'next/server';
 
export async function GET(
  req: NextRequest,
) {
  const { searchParams } = new URL(req.url);
  const q : string = searchParams.get('q')!;
  const pageSize : number = Number(searchParams.get('pageSize')!) || 50;
  const page : number = Number(searchParams.get('page')!) || 1;
  const data = await searchBooks(q, { page, pageSize });
  return NextResponse.json(data);
}
