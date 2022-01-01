import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        name: 'article-1',
        id: '0',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-2',
        id: '1',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-3',
        id: '2',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    }, {
        name: 'article-4',
        id: '3',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-1',
        id: '4',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-2',
        id: '5',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-3',
        id: '6',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    }, {
        name: 'article-4',
        id: '7',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-1',
        id: '8',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-2',
        id: '9',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    },
    {
        name: 'article-3',
        id: '10',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    }, {
        name: 'article-4',
        id: '11',
        image: 'https://picsum.photos/seed/picsum/200/300',
        price: '200€',
        like: true
    }

]

export const allProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        likeProduct: (state, action) => {

            console.log(action);
            const { id, isLike } = action.payload
            const index = state.findIndex(e => e.id === id)

            state[index].like = isLike
        }

    }
})

export const { likeProduct } = allProductSlice.actions

export default allProductSlice.reducer