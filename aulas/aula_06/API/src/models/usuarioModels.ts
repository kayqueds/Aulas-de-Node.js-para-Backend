// importando  a conexão com o banco de dados e as Interfaces
import { connectionModel } from "./connectionModels";
import type { User } from "../interfaces/types";

const getUserAll =  async () =>{
    const [listUsers] = await connectionModel.execute('SELECT * FROM user')
        return listUsers
}

const getUserById =  async (id:number) =>{
    const [user] = await connectionModel.execute(`SELECT * FROM user where id=${id}`)
    return user
}

const createNewUser=  async (body: User) =>{
    const {name,email,password,role} = body
    const query = 'INSERT INTO user(name,email,password,role) values(?,?,?,?)'
    const [newUser] =  await connectionModel.execute(query,[name,email,password,role])
    return newUser
}
const editUser =  async (id:number, body:User) =>{
    const {name,email,password,role} = body
    const query = 'UPDATE user set name=?,email=?,password=?,role=? where id = ?'
    const [userEdit] = await connectionModel.execute(query,[name,email,password,role,id])
    return userEdit
}

const editUserPartial = async (id:number,updates:Partial<User>)=>{
    delete updates.createdAt;
    const setclause =  Object.keys(updates).map(field => `${field} = ?`).join(', ')
    const query = `UPDATE user set ${setclause}, updatedAt = NOW() where id= ?`
    const [result] = await connectionModel.execute(query,[...Object.values(updates),id])
    return result
}
const removeUser =  async (id:number) =>{
    const [user] = await connectionModel.execute(`DELETE FROM user where id= ${id}`)
    return user
}

export default {
    getUserAll,
    getUserById,
    createNewUser,
    editUser,
    editUserPartial,
    removeUser
}

