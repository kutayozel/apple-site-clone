import NextAuth from "next-auth";
import { SanityAdapter } from "next-auth-sanity";
import { sanityClient } from "../../../sanity";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: SanityAdapter(sanityClient),
};
export default NextAuth(authOptions);
