
import prisma from "./postgresdb"
export async function getUserFromDb(email:string){
    
    const user =await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    return user
}