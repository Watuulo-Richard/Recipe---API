import { db } from "@/prisma/db";
import { UserLoginType } from "@/Types/types";
import { NextRequest, NextResponse } from "next/server";
import { compareSync } from "bcrypt-ts";
export async function POST(request:NextRequest) {
    try {
        const {email, password}:UserLoginType = await request.json()
        // console.log(data);
        // Find User By Email
        const userExistingInDB = await db.user.findUnique({
            where : {
                email
            }
        })
        if (!userExistingInDB){
            return NextResponse.json({
                message: "Wrong Credentials",
                error: "Something Went Wrong",
                status: 409,
            })
        }
        // Verify Password
        const isPasswordCorrect = compareSync(password, userExistingInDB.password)
        if(!isPasswordCorrect){
            return NextResponse.json({
                message: "Wrong Credentials",
                error: "Something Went Wrong",
                status: 409,
            }, {
                status: 409
            })
        }
        // Function for creating the session
        // await createSession(userExistingInDB)
        // return User  Excluding The Password
        const { password: removedPassword, ...others } = userExistingInDB
        console.log(removedPassword);
        return NextResponse.json({
            message: "Login Successful",
            userExistingInDB: others,
            error: null,
            status: 201,
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Login Failed",
            error: "Something Went Wrong",
            status: 500,
        })
    }
}