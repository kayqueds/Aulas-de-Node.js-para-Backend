import type { User } from "../interfaces/types";
import usuarioModels from "../models/usuarioModels";
import type { Request,Response } from "express";

const getUserAll =  async (req:Request, res:Response) =>{
    const listUsers = await usuarioModels.getUserAll()
    return res.status(200).json(listUsers)
}

const getByUserId =  async (req:Request, res:Response) =>{
    const id = Number(req.params.id)
    const user = await usuarioModels.getUserById(id)
    return res.status(200).json(user)
}

const createNewUser =  async (req:Request, res:Response) =>{

    const newUser =  await usuarioModels.createNewUser(req.body)
    return res.status(201).json(newUser)
}
const editUser =  async (req:Request, res:Response) =>{
    const id = Number(req.params.id)    
    const userEdit = await usuarioModels.editUser(id,req.body)
    return res.status(200).json(userEdit)
}

const editUserPartial = async (req:Request, res:Response)=>{
    const id = Number(req.params.id)
    const updates: Partial<User> = req.body
    const result = await usuarioModels.editUserPartial(id,updates)
    return res.status(200).json(result)
}
const removeUser =  async (req:Request, res:Response) =>{
    const user = await usuarioModels.removeUser(Number(req.params.id))
    return res.status(200).json(user)
}
export default {
    getUserAll,
    getByUserId,
    createNewUser,
    editUser,
    editUserPartial,
    removeUser
}



