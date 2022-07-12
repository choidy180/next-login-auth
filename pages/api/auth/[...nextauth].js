import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "631373946948-lftsgfir1673g42vve5untruokvkk0cr",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  // page에, 로그인 화면의 경로를 지정해준다.
  pages: {
    signIn: "/auth/login",
  },
});