import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
type Role = keyof typeof roleBasedPrivateRoutes;

const AuthRoutes = ['/login', '/register'];
const commonPrivateRoutes = [
   '/dashboard',
   '/dashboard/change-password',
   '/doctors',
];
const roleBasedPrivateRoutes = {
   PATIENT: [/^\/dashboard\/patient/],
   DOCTOR: [/^\/dashboard\/doctor/],
   ADMIN: [/^\/dashboard\/admin/],
   SUPER_ADMIN: [/^\/dashboard\/super-admin/],
};

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
        

  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: '/dashboard/:path*',
}