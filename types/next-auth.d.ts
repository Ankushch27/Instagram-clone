import NextAuth, { User } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: User
  }
  interface User {
    email: string
    fullName: string
    username: string
    _id: string
  }
}
declare module 'next-auth/jwt' {
  interface JWT {
    user: User
  }
}
