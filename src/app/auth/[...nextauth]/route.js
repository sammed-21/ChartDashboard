import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // Optional: Define additional callbacks
  callbacks: {
    // Session callback
 

     // Allow sign in
    },
  },
);

export { handler as GET, handler as POST };