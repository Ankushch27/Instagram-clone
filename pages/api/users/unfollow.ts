import clientPromise from 'db/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await clientPromise

  const { currentUsername, usernameToUnfollow } = req.body

  try {
    const result = await client
      .db()
      .collection('users')
      .findOneAndUpdate(
        { username: usernameToUnfollow },
        { $pull: { followers: currentUsername } }
      )
    if (result.ok) {
      await client
        .db()
        .collection('users')
        .findOneAndUpdate(
          { username: currentUsername },
          { $pull: { following: usernameToUnfollow } }
        )
    }

    res.status(200).json({ message: `Unfollowed ${usernameToUnfollow}` })
  } catch (error: any) {
    res.status(422).json({ error })
  }
}
