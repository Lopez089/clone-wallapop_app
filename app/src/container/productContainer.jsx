import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { Product } from 'components/product'
import { useSelector } from 'react-redux'

export const ProductContainer = () => {
	const articles = useSelector((state) => state.product)

	return (
		<SimpleGrid columns={2} spacing={'.5rem'}>
			{articles.map((article) =>
				<Product
					image={article.image}
					name={article.name}
					key={article.id}
					price={article.price}
					id={article.id}
					like={article.like}
				/>)}
		</SimpleGrid>
	)
}