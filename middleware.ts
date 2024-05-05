import { clerkMiddleware } from "@clerk/nextjs/server";


export default clerkMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};

function clerkMiddleware(arg0: { publicRoutes: string[]; ignoredRoutes: string[]; }) {
  throw new Error("Function not implemented.");
}
