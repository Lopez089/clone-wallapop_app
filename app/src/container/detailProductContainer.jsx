import React from 'react'
import { useParams } from 'react-router'

export const DetailProduct = () => {
    const { id } = useParams()
    return (
        id
    )
}