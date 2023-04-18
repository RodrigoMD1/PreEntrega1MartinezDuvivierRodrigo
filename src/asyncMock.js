
const products = [
    {
        id: '1',
        name: 'Pulsera de oro',
        price: 1000,
        Image: "/Img/img-producto01.jpg",
        category: 'pulseras',
        stock: 25,
        description: 'Esta pulsera única está hecha a mano con oro de 14 quilates y cuentas de piedra natural. Su diseño artesanal y suave al tacto la hacen perfecta para usar a diario, mientras que sus detalles en oro de 18 quilates la hacen lo suficientemente elegante para una ocasión especial. Además, su ajuste cómodo y seguro garantiza que se mantendrá en su lugar sin importar lo que hagas durante el día. La pulsera es una joya versátil que complementará cualquier atuendo, y su construcción de alta calidad garantiza que será una pieza que durará toda la vida.'

    },
    {
        id: '2',
        name: 'Anillo De Oro',
        Image: "/Img/img-producto02.jpg",
        price: 2000,
        category: 'anillos',
        stock: 15,
        description: ' Este anillo es una verdadera obra de arte hecha a mano con diamantes y oro de 18 quilates. Su diseño elegante y atemporal lo hace perfecto para usar como anillo de compromiso o para una ocasión especial. Además, su construcción sólida y duradera garantiza que será una joya que durará toda la vida. El anillo viene en una caja de presentación elegante para que puedas hacer un regalo inolvidable a alguien especial o simplemente darte un capricho a ti mismo.'

    },
    {
        id: '3',
        name: 'Collar',
        Image: "/Img/img-producto03.jpg",
        price: 3000,
        category: 'collares',
        stock: 10,
        description: ' Este hermoso collar está hecho a mano con materiales de alta calidad, como perlas cultivadas y oro de 14 quilates. Su diseño elegante y sofisticado lo hace perfecto para usar en cualquier ocasión, desde una cena formal hasta una tarde casual con amigos. Además, su longitud ajustable te permite personalizarlo para que se adapte perfectamente a tu estilo y preferencias.'

    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === productId))
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