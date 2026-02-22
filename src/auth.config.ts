import NextAuth,{ type NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials";
import {z} from 'zod';


const fakeUsers = [
    {id: "1", name:"David", email:"david@gmail.com", password:"123456", role:"admin"},
    { id: "2", name: "Maria", email:"admin@gmail.com", password:"123456", role:"super-admin"},
]


export const authConfig = {
  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
  },

  session: {
    strategy: "jwt",
  },

callbacks: {
    jwt({ token, user, }) {
    if ( user ){
      token.data = user;
      
    }

    return token;
    },

    session({session, token, user}) {
      /* console.log({session, token, user}); */
      session.user = token.data as any;

      return session;
    },
  },


  providers:[
     Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;

        const user = fakeUsers.find(u => u.email === email);
        if (!user) return null;
        if (user.password !== password) return null;

        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
      },
    }),


  ]
} satisfies NextAuthConfig;


export const {signIn, signOut, auth, handlers} = NextAuth(authConfig);
