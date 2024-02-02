import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isLoggedIn: boolean = true;

export function middleware(request: NextRequest) {
	const url = request.nextUrl.pathname;
	console.log(url);
    
	if (!isLoggedIn && url !== '/login') {
		return NextResponse.redirect(new URL("/login", request.url));
	}else if (isLoggedIn && url === '/login'){
		return NextResponse.redirect(new URL("/home", request.url));
    }
    return NextResponse.next()
}
