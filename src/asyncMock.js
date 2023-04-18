
const products = [
    {
        id: '1',
        name: 'Pulsera de oro',
        price: 1000,
        Image: "/Img/img-producto01.jpg",
        category: 'pulseras',
        stock: 25,
        description: 'buen pulsera'

    },
    {
        id: '2',
        name: 'Anillo De Oro',
        Image: "/Img/img-producto02.jpg",
        price: 2000,
        category: 'anillos',
        stock: 15,
        description: 'buen anillo'

    },
    {
        id: '3',
        name: 'Collar',
        Image: "/Img/img-producto03.jpg",
        price: 3000,
        category: 'collares',
        stock: 10,
        description: 'buen collar'

    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}