import express from 'express'
import productController from './controller/productController'

export const router =  express.Router()

router.get('/produto', productController.getProductAll)
router.get('/produto/:id', productController.getByProductId)
router.post('/produto', productController.createNewProduct)
router.patch('/produto/:id', productController.editProductPartial)
router.put('/produto/:id', productController.editProduct)
router.delete('/produto/:id', productController.removeProduct)