import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
console.log(process.env.NEXT_GOOGLE_CLIENT_ID)
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET
    })
  ]
});

export { handler as GET, handler as POST };
