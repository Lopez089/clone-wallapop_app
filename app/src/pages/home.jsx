import React from 'react'
import { ProductContainer } from 'container/productContainer'
import { LayoutPage } from 'layout/layoutPage';

export const Home = () => {
    return (
        <LayoutPage>
            <ProductContainer />
        </LayoutPage>
    )
}