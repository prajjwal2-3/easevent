'use server'
import prisma from "../postgresdb";
export async function getUserByEmail(email: string|null|undefined) {
    if (!email) {
        throw new Error(`no email provided`);
    }
    try {
        const user = await prisma.user.findUnique({
        where: {
            email,
        },
        });
    
        if (!user) {
        throw new Error(`No user exist with email: ${email}`);
        }
        return user
    } catch (err) {
        throw new Error(`Failed to get user ${err}`);
    }
}