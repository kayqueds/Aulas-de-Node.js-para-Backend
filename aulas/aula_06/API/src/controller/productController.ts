import { get } from "http";
import type { Product } from "../interfaces/types";
import produtoModels from "../models/produtoModels";
import type { Request,Response } from "express";

const getProductAll =  async (req:Request, res:Response) =>{
    const listProducts = await produtoModels.getProductAll()
    return res.status(200).json(listProducts)
}

const getByProductId =  async (req:Request, res:Response) =>{
    const id = Number(req.params.id)
    const product = await produtoModels.getByProductId(id)
    return res.status(200).json(product)
}

const createNewProduct=  async (req:Request, res:Response) =>{

    const newProduct =  await produtoModels.createNewProduct(req.body)
    return res.status(201).json(newProduct)
}
const editProduct =  async (req:Request, res:Response) =>{
    const id = Number(req.params.id)    
    const productEdit = await produtoModels.editProduct(id,req.body)
    return res.status(200).json(productEdit)
}

const editProductPartial = async (req:Request, res:Response)=>{
    const id = Number(req.params.id)
    const updates: Partial<Product> = req.body
    const result = await produtoModels.editProductPartial(id,updates)
    return res.status(200).json(result)
}
const removeProduct =  async (req:Request, res:Response) =>{
    const product = await produtoModels.removeProduct(Number(req.params.id))
    return res.status(200).json(product)
}

export default {
    getProductAll,
    getByProductId,
    createNewProduct,
    editProduct,
    editProductPartial,
    removeProduct
}

