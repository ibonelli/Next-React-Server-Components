import { NextResponse } from 'next/server'
import { getData } from '@/lib/getData';

export async function GET() {
	const MyList: any = getData();

  return NextResponse.json({ MyList }, { status: 200 })
}
