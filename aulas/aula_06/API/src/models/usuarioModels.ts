// importando  a conexão com o banco de dados e as Interfaces
import { connectionModel } from "./connectionModels";
import type { User } from "../interfaces/types";
import {hash, compare} from 'bcrypt'

// pegar todos
const getUserAll =  async () =>{
    const [listUsers] = await connectionModel.execute('SELECT * FROM user')
        return listUsers
}
// pegar pelo id
const getUserById =  async (id:number) =>{
    const [user] = await connectionModel.execute(`SELECT * FROM user where id=${id}`)
    return user
}
// criar novo usuário
const createNewUser=  async (body: User) =>{
    const {name,email,password,role} = body
    // vou gerar um número aleatório de salt para hashear a senha
    const round = 10
    const hashedPassword = await hash(password, round);
    const query = 'INSERT INTO user(name,email,password,role) values(?,?,?,?)'
    const [newUser] =  await connectionModel.execute(query,[name,email,hashedPassword,role])
    return newUser
}
// função para editar o usuário
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

// autenticar usuário usando o compare
const authenticateUser = async (email:string, password:string) => {
    const [query]: any = await connectionModel.execute('SELECT * FROM user WHERE email = ?', [email]);
    if (query.length === 0) {
        throw new Error('Usuário não encontrado');
    }
    const user = query[0];
    const isPasswordValid = await compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Senha inválida');
    }
    return user;
}

// aqui eu exporto as funções para os outros arquivos

export default {
    getUserAll,
    getUserById,
    createNewUser,
    authenticateUser,
    editUser,
    editUserPartial,
    removeUser
}

