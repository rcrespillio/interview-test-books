import getAuthor from '@/lib/providers/get-author';
import { NextRequest, NextResponse } from 'next/server';
 
export async function GET(
  req: NextRequest,
  data: any
) {
  const { searchParams } = new URL(req.url);
  const keys : string[] = searchParams.get('keys')?.split(',')!;

  const responses  = await (Promise.all(keys.map(k => getAuthor(k))));
  console.log(responses)
  return NextResponse.json(responses);
}
