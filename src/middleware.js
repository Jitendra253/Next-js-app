import { NextResponse } from "next/server";

export default function middleware(req) {

    // if(req.nextUrl.pathname != "/login"){
        return NextResponse.redirect(new URL("/login", req.url));
    // }
}
export const config={
    matcher:["/about/:path*","/studentlist"]
}