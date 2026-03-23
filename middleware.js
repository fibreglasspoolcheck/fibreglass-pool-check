import { NextResponse } from 'next/server'

// Case-sensitive redirect map: lowercase -> PascalCase (or PascalCase -> lowercase for /FAQ)
// Moved from next.config.js because Next.js/Vercel redirect matching is case-insensitive,
// which caused infinite 308 redirect loops on destination URLs.
const REDIRECTS = {
  '/contact': '/Contact',
  '/about': '/About',
  '/poolcheckreport': '/PoolCheckReport',
  '/quotereview': '/',
  '/QuoteReview': '/',
  '/QuoteReview/order': '/',
  '/buyerchecklist': '/BuyerChecklist',
  '/redflagsguide': '/RedFlagsGuide',
  '/onsiteassessment': '/OnSiteAssessment',
  '/buyingahouse': '/BuyingAHouse',
  '/poolowner': '/PoolOwner',
  '/serviceboundaries': '/ServiceBoundaries',
  '/FAQ': '/faq',
}

export function middleware(request) {
  // www -> non-www redirect (must be first, before pathname checks)
  const host = request.headers.get('host') || ''
  if (host.startsWith('www.')) {
    const url = request.nextUrl.clone()
    url.host = host.replace(/^www\./, '')
    return NextResponse.redirect(url, 301)
  }

  const { pathname } = request.nextUrl

  // JavaScript object key lookup is case-sensitive,
  // so /About will NOT match the /about key - no loop
  const destination = REDIRECTS[pathname]
  if (destination) {
    const url = request.nextUrl.clone()
    url.pathname = destination
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  // Match all routes except static files and Next.js internals
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
