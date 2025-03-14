// import { User } from "@prisma/client";
// import {jwtVerify, SignJWT} from "jose"
// import { cookies } from "next/headers";
// import "server-only"
// export type PayloadDataTypes = { 
//     userId: string; 
//     userName: string; 
//     userEmail: string; 
//     userProfile: string; 
//     expiresAt: Date;
// }


// const secretKey = new TextEncoder().encode(process.env.SESSION_SECRET)

// // Create A Function For Encrypting The Data, In This Case The Data Is Called Payload

// export async function encrypt(payload:PayloadDataTypes) {
//     return new SignJWT(payload)
//     .setProtectedHeader({alg: "HS256"})
//     .setExpirationTime("24h")
//     .sign(secretKey)
// }

// // Create A Function For Decrypting The Token To Get Back Our Payload(Data)
// export async function decrypt(session:string | undefined = '') {
//     try {
//         const { payload } = await jwtVerify(session, secretKey, {
//             algorithms: ["HS256"]
//         })
//         return payload
//     } catch (error) {
//         return null
//     }
// }

// // Creating Session
// export async function createSession(existingUser:User) {
//     const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
    
//     const payload = {
//         userId: existingUser.id,
//         userName: existingUser.name,
//         userEmail: existingUser.email,
//         userProfile: existingUser.profile,
//         expiresAt: expiresAt
//     }
//     const session = await encrypt(payload)
//     const cookieStore = await cookies()
//     cookieStore.set("session", session, {
//         httpOnly: true,
//         secure: true,
//         sameSite: "lax",
//         expires: expiresAt,
//         path: "/"
//     })
// }

// // Updating The Session
// export async function updateSession() {
//     const cookieStore = await cookies()
//     const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
//     const session = cookieStore.get("session")?.value
//     const payload = await decrypt(session)
//     if(!session || !payload) {
//         return null
//     }
//     cookieStore.set("session", session, {
//         httpOnly: true,
//         secure: true,
//         sameSite: "lax",
//         expires: expiresAt,
//         path: "/"
//     })
// }

// //  Deleting Session
// export async function deleteSession() {
//     const cookieStore = await cookies()
//     cookieStore.delete("session")
// }