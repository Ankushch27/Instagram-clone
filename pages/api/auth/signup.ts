import clientPromise from 'db/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise

  const { user } = req.body
  try {
    await client
      .db()
      .collection('users')
      .createIndex({ email: 1, username: 1 }, { unique: true })
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(user.password, salt)
    const result = await client
      .db()
      .collection('users')
      .insertOne({ ...user, password: hashedPassword, followers: [], following: [] })
    res.status(201).json(result)
  } catch (error: any) {
    let errorFor = ''
    let message = ''
    if (error.code && error.code === 11000) {
      if (error.message.includes('email')) {
        errorFor = 'email'
        message = `Another account is already using ${user.email}`
      } else if (error.message.includes('username')) {
        errorFor = 'username'
        message = `Username ${user.username} is not available`
      }
    }
    res.status(422).json({ errorFor, message })
  }
}
