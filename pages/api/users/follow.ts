import clientPromise from 'db/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise

  const { currentUsername, usernameToFollow } = req.body

  try {
    const result = await client
      .db()
      .collection('users')
      .findOneAndUpdate(
        { username: usernameToFollow },
        { $push: { followers: currentUsername } }
      )
    if (result.ok) {
      await client
        .db()
        .collection('users')
        .findOneAndUpdate(
          { username: currentUsername },
          { $push: { following: usernameToFollow } }
        )
    }

    res.status(200).json({ message: `Followed ${usernameToFollow}` })
  } catch (error: any) {
    res.status(422).json({ error })
  }
}
