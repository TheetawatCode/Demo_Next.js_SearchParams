/*

export async function GET() {
    return Response.json({ message: "About" });
}

*/

// การใช้รูปแบบ searchParams
import { NextRequest } from "next/server";

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name");
    return Response.json({ message: `Hello ${name || "World"}!` });
}

/* 

npm run dev
Run ทดสอบที่ port 3000 at 
http://localhost:3000/api/about
http://localhost:3000/api/about?name=your_name

*/



