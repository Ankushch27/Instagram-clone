import clientPromise from 'db/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise

  const { username } = req.query

  try {
    const user = await client.db().collection('users').findOne({ username })
    if (!user) return res.status(404).json({ message: 'User not found' })

    delete user.password
    const posts = await client.db().collection('posts').find({}).toArray()

    res.status(200).json({ ...user, posts })
  } catch (error: any) {
    res.status(422).json({ error })
  }
}
