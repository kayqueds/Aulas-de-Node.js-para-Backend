import { IProduct } from "../interfaces/types";
import { connectionModule } from "./connectionModel";


// renomear tabela

    const getAllProduct = async () => {
        const [listProduct] = await connectionModule.execute(
            'SELECT * FROM table_name'
        )
        return listProduct
    }
    const getIdByProduct = async (id:Number) => {
        const [productById] = await connectionModule.execute(
            `SELECT * FROM table_name WHERE id=${id}`
        )
        return productById
    }
    const createProduct = async (body:IProduct) => {
        const {name, description, price, stock, createdAt, updatedAt} = body;
        const query = "INSERT INTO table_name(name, description, price, stock, createdAt, updatedAt) VALUES(?,?,?,?,?,?)"
        const [newProduct] = await connectionModule.execute(query, [name, description, price, stock, createdAt ?? new Date(), updatedAt ?? new Date()]);
        return newProduct
    }
    const editPartialProduct = async (id:number, update: Partial<IProduct>) => {
        delete update.createdAt
        if(!update.updatedAt){
            update.updatedAt = new Date();
        }
        const fields = Object.keys(update)
        const values = Object.values(update)
        const setClause = fields.map(field => `${field}=?`).join(', ')
        const query = `UPDATE table_name SET ${setClause}, updatedAt=NOW() WHERE id=?`
        const [editProduct] = await connectionModule.execute(query, [...values, id]);
        return editProduct
    }
    const deleteProduct = async (id:number) => {
        const [deleted] = await connectionModule.execute(`DELETE FROM table_name WHERE id=${id}`);
        return deleted
    }

export default{
    getAllProduct,
    getIdByProduct,
    createProduct,
    editPartialProduct,
    deleteProduct
}