import bcrypt from 'bcryptjs'
import clientPromise from 'db/mongodb'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { placeholder: 'Username', type: 'text' },
        password: { placeholder: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const client = await clientPromise

        if (credentials?.username && credentials.password) {
          const user = await client
            .db()
            .collection('users')
            .findOne({ email: credentials.username })
          if (!user) throw new Error('User not found')
          // console.log('user', user)

          const isMatch = await bcrypt.compare(credentials.password, user.password)
          if (!isMatch) throw new Error('Invalid credentials')

          delete user.password
          return user
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  secret: process.env.JWT_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }) => {
      session.user = token.user
      return session
    },
  },
})
