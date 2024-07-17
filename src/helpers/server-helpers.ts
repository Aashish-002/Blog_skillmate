/**
 * Connect to DB methods
 */

import prisma from "../../prisma"

 export const dbConnect = async () => {
    try {
        await prisma.$connect();
    } catch (error) {
        console.error(error);
        throw new Error("Error connecting to DB")
        
    }
 }