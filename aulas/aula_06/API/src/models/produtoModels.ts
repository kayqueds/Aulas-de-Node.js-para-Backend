import { connectionModel } from "./connectionModels";
import type { Product } from "../interfaces/types";
import { get } from "http";

const getProductAll =  async () =>{
    const [listProducts] = await connectionModel.execute('SELECT * FROM product')
    return listProducts
}

const getByProductId =  async (id:number) =>{
    const [product] = await connectionModel.execute(`SELECT * FROM product where id=${id}`)
    return product
}

const createNewProduct=  async (body: Product) =>{
    const {name,price,stock,description,createdAt,updatedAt} = body
    const query = 'INSERT INTO product(name,price,stock,description,createdAt,updatedAt) values(?,?,?,?,?,?)'
    const [newProduct] =  await connectionModel.execute(query,[name,price,stock,description,createdAt ?? new Date(),updatedAt ?? new Date()])    
    return newProduct
}
const editProduct =  async (id:number, body:Product) =>{
    const {name,price,stock,description,updatedAt} = body
    const query = 'UPDATE product set name=?,price=?,stock=?,description=?,updatedAt=? where id = ?'
    const [productEdit] = await connectionModel.execute(query,[name,price,stock,description,updatedAt?? new Date(),id])
    return productEdit
}

const editProductPartial = async (id:number,updates:Partial<Product>)=>{
    delete updates.createdAt;
    if(!updates.updatedAt){
        updates.updatedAt = new Date()
    }

    const fields = Object.keys(updates);
    const values =  Object.values(updates);
    const setclause =  fields.map(field => `${field} = ?`).join(', ')
    const query = `UPDATE product set ${setclause}, updatedAt = NOW() where id= ?`
    const [result] = await connectionModel.execute(query,[...values,id])
    return result
}
const removeProduct =  async (id:number) =>{
    const [product] = await connectionModel.execute(`DELETE FROM product where id= ${id}`)
    return product
}

export default {
    getProductAll,
    getByProductId,
    createNewProduct,
    editProduct,
    editProductPartial,
    removeProduct
}

