import express from 'express'
import productController from './controller/productController'
import userController from './controller/userController'

export const router =  express.Router()

// Rotas de Produtos
router.get('/produto', productController.getProductAll)
router.get('/produto/:id', productController.getByProductId)
router.post('/produto', productController.createNewProduct)
router.patch('/produto/:id', productController.editProductPartial)
router.put('/produto/:id', productController.editProduct)
router.delete('/produto/:id', productController.removeProduct)

// Rotas de Usuários
router.get('/usuario', userController.getUserAll)
router.get('/usuario/:id', userController.getByUserId)
router.post('/usuario', userController.createNewUser)
router.patch('/usuario/:id', userController.editUserPartial)
router.put('/usuario/:id', userController.editUser)
router.delete('/usuario/:id', userController.removeUser)