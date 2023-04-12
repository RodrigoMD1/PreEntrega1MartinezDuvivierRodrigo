
const products = [
    {
        id: '1',
        name:'Iphone',
        price: 1000,
        Image:'../Img/img-productos02',
        category: 'celular',
        stock: 25,
    
    },
    {
        id: '2',
        name:'Samsungs22',
        Image:'../Img/img-productos01',
        price: 2000,
        category: 'celular',
        stock: 15,
    
    },
    {
        id: '3',
        name:'nokia1100',
        Image:'../Img/img-productos03',
        price: 3000,
        category: 'celular',
        stock: 10,
    
    }
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}