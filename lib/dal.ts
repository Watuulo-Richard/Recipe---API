// import { cookies } from "next/headers";
// import { decrypt } from "./session";
// import { cache } from "react";
// import { db } from "@/prisma/db";

// export type AuthUser = {
//     name: string;
//     email: string;
//     phone: string;
//     profile: string;
//     role: string;
// }

// export const getAuthSession = cache(async()=>{
//     const cookieStore = await cookies()
//     const cookie = cookieStore.get("session")?.value
//     const session = await decrypt(cookie)
//     if(!session) {
//         return null
//     }

//     const id = session.userId as string

//     // Getting The User From The Database Basing On The Id In The Session

//     const existingUser = await db.user.findUnique({
//         where: { id },
//         select: {
//             name: true,
//             email: true,
//             profile: true,
//             role: true,
//         }
//     })
//     return existingUser as AuthUser
// })