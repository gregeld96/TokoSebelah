const { Cart, Product, Category} = require('../models');

class CartController {
    static readProduct (req, res, next) {
        Product.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static readCategory (req, res, next) {
        Category.findOne({
                where: {
                    name: req.params.name
                },
                include: [
                    {
                        model: Product
                    }
                ]
            })
            .then(data => {
                if (!data){
                    throw ({status: 404, msg:'Data not found'})
                } else {
                    res.status(200).json(data)
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static readCart (req, res, next) {
        let userId = req.userData.id 

        Cart.findAll({
                where: {
                    userId
                },
                order: [
                    ["id", "ASC"]
                ],
                include: [
                    {
                        model: Product
                    }
                ]
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static add (req, res, next) {
        let userId = req.userData.id

        const addCart = {
            productId: req.params.id,
            productQty: req.body.productQty,
            checkOut: false,
            userId
        }

        let currentProduct = "";

        Product.findByPk(req.params.id)
            .then(data => {
                console.log(data.stock)
                console.log(req.body.productQty)
                if(req.body.productQty > data.stock) throw ({status:400, msg:`Sorry please take the right amount`})
                else {
                    currentProduct = data.stock;
                    return Cart.findOne({
                        where: {
                            productId: req.params.id,
                            userId
                        }
                    })
                }
            })
            .then(data => {
                // console.log(data, '=====')
                if(!data) {
                    return Cart.create(addCart)
                } else if ((data.productQty + req.body.productQty) > currentProduct) {
                    throw ({status:400, msg:`Sorry your order exceed the stock`})
                } else {
                    let productQty = data.productQty
                    let updatedQty = {
                        productQty: (productQty + req.body.productQty)
                    }
                    // console.log(updatedQty)
                    return Cart.update(updatedQty, 
                        { where: {
                            userId
                        }
                    })
                }
            })
            .then(data => {
                res.status(201).json({data, msg: `Product added to cart`})
            })
            .catch(err => {
                next(err)
            })
    }

    static delete (req, res, next) {
        let { id } = req.params

        Cart.destroy({
                where: {
                    id
                }
            })
            .then(data => {
                res.status(200).json({msg: `Product removed from cart`})
            })
            .catch(err => {
                next(err)
            })
    }

    static update (req, res, next) {
        let userId = req.userData.id
        let { id } = req.params //product id
        let { productQty } = req.body

        Product
            .findByPk(id)
            .then(data => {
                if(data.stock < productQty) throw ({status:400, msg:`Sorry your order exceed the stock`})
                else {
                    return Cart.findOne({
                        where: {
                            productId: id,
                            userId
                        }
                    })
                }
            })
            .then(data => {
                if (data === null){
                    throw ({status: 404, msg: "Data not found"})
                } else {
                    let updatedQty = {
                        productQty: productQty
                    }
                    return Cart.update(updatedQty, {where: {userId}})
                }
            })
            .then(data => {
                res.status(200).json({data, msg: `Successfully edit` })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = CartController