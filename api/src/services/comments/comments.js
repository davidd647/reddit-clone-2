import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const parentPostIds = ({ parentPostId }) => {
  return db.comment.findMany({
    where: { parentPostId },
  })
}

export const comments = () => {
  return db.comment.findMany()
}

export const comment = ({ id }) => {
  return db.comment.findOne({
    where: { id },
  })
}

export const createComment = ({ input }) => {
  requireAuth()

  return db.comment.create({
    data: input,
  })
}

export const updateComment = ({ id, input }) => {
  requireAuth()

  return db.comment.update({
    data: input,
    where: { id },
  })
}

export const deleteComment = ({ id }) => {
  requireAuth()

  return db.comment.delete({
    where: { id },
  })
}
