/* eslint-disable @typescript-eslint/no-unused-vars */
// import { db } from "@/prisma/db";
import { db } from "@/prisma/db";
import { RecipeType } from "@/Types/types";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        const data:RecipeType = await request.json()
        const createRecipe = await db.recipeProduct.create({
            data
        })
        return NextResponse.json({
            message:"product created successfully",
            data: createRecipe,
            error: null
        }, {
            status: 200
        })  
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"product failed",
            data: null,
            error: "something went wrong"
        },{
            status: 500
        })
    }
}

export async function GET(request:NextRequest){
    try {
        const getAllRecipeProducts = await db.recipeProduct.findMany()
        return NextResponse.json({
            message: "success",
            data: getAllRecipeProducts,
            error: null
        },{
            status: 200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to fetch",
            data: null,
            error: "something went wrong"
        },{
            status: 500
        })
    }
}