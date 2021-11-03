import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  const country = req.geo.country?.toLowerCase() || 'us'
  const locale = req.headers.get('accept-language')?.split(',')?.[0] || 'default'

  const shouldHandleLocale =
    !PUBLIC_FILE.test(req.nextUrl.pathname) &&
    !req.nextUrl.pathname.includes('/api/') &&
    req.nextUrl.locale === 'default'

  if (shouldHandleLocale) {
    req.nextUrl.pathname = `/test/${country}`
    req.nextUrl.locale = locale

    return NextResponse.rewrite(req.nextUrl)
  }
}
