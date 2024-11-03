import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from '@convex-dev/auth/nextjs/server'

const isPublicRoute = createRouteMatcher([
  '/auth',
  '/',
  '/preview(.*)',
  '/api/edgestore(.*)',
])

const isAuthRoute = createRouteMatcher(['/auth'])

export default convexAuthNextjsMiddleware((request, { convexAuth }) => {
  if (!isPublicRoute(request) && !convexAuth.isAuthenticated()) {
    return nextjsMiddlewareRedirect(request, '/auth')
  }

  if (isAuthRoute(request) && convexAuth.isAuthenticated()) {
    return nextjsMiddlewareRedirect(request, '/')
  }
})

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
