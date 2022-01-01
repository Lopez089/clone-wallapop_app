import React from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { likeProduct } from 'features/product/product'
import { useDispatch } from 'react-redux'

export const IsLike = ({ like, id }) => {
  const dispatch = useDispatch()

  return (
    like
      ? <BsHeart onClick={() => dispatch(likeProduct({ id, isLike: false }))} />
      : <BsHeartFill onClick={() => dispatch(likeProduct({ id, isLike: true }))} />
  )
}
