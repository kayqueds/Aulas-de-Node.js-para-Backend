// importando arquivos
import productModel from "../models/produtoModel";
import { Request, Response } from "express";

    const getAllProduct = async (req: Request, res: Response) => {
        const listProduct = await productModel.getAllProduct();
        return res.status(200).json(listProduct);
    }
    const getIdByProduct = async (req: Request, res: Response) => {
        const productById = await productModel.getIdByProduct(Number(req.params.id));
        return res.status(200).json(productById);
    }

    const createProduct = async (req: Request, res: Response) => {
        const newProduct = await productModel.createProduct(req.body);
        return res.status(201).json(newProduct);
    }
    const editPartialProduct = async (req: Request, res: Response) => {
        const editedProduct = await productModel.editPartialProduct(Number(req.params.id), req.body);
        return res.status(200).json(editedProduct);
    }

    const deleteProduct = async (req: Request, res: Response) => {
        const deleted = await productModel.deleteProduct(Number(req.params.id));
        return res.status(204).json(deleted);
    }

export const produtoModel = {
    getAllProduct,
    getIdByProduct,
    createProduct,
    editPartialProduct,
    deleteProduct
}