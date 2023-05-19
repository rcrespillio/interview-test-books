import getBook from '@/lib/providers/get-book';
import { NextRequest, NextResponse } from 'next/server';
 
export async function GET(
  req: NextRequest,
  data: any
) {
  const { key } = data.params;
  
  const response = await getBook(key);
  return NextResponse.json(response);
}
