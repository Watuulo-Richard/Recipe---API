import { db } from "@/prisma/db";
import { UserType } from "@/Types/types";
import { hashSync } from "bcrypt-ts";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        const {name, email, password, profile}:UserType = await request.json()
        console.log({name:name, email:email, password:password, profile:profile});
        // Check If User Exists In The DataBase
        const existingUser = await db.user.findUnique({
            where : {
                email
            }
        })
        if(existingUser){
            return NextResponse.json({
                message: "User Already Exists In The DataBase",
                error: "User Already Exists In The DataBase",
                status: 409
            }, {
                status: 409
            })
        }
        // Hashing The Password From The Form
        const hashedPassword = hashSync(password, 10)
        // Creating A User
        const createUser = await db.user.create({
            data : {
                name,
                email,
                password: hashedPassword,
                profile,
            }
        })

        // After Creating The User We destructure The User And return the without the password
        const {password:removedPassword, ...others} = createUser
        console.log(removedPassword);
        return NextResponse.json({
            message: "User Registered Successfully",
            data: others,
            error: null,
            status: 201
        },{
            status: 201
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed To Create User",
            data: null,
            error: "Something Went Wrong",
            status: 500
        }, {
            status: 500
        })
    }
}