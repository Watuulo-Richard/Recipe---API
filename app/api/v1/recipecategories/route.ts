import { db } from "@/prisma/db";
import { CategoryRecipeType } from "@/Types/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        const data:CategoryRecipeType = await request.json()
        // console.log(data);
        const createCategoryRecipe = await db.categoryRecipe.create({
            data
        })
        return NextResponse.json({
        message:"Recipe Created Successfully",
        data:createCategoryRecipe,
        error: null,
        status: 201
    }, {
        status: 201
    })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Recipe Created Successfully",
            data: null,
            error: "Something Went Wrong...!!!",
            status: 500
        }, {
            status: 500
        })
    }
}

export async function GET(){
    try {
        const getAllCategoryRecipe = await db.categoryRecipe.findMany()
        return NextResponse.json({
            message:"Recipe Categories Fetched Successfully",
            data:getAllCategoryRecipe,
            error: null,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        {
            console.log(error);
            return NextResponse.json({
                message: "Recipe Categories Failed To Fetched",
                data: null,
                error: "Something Went Wrong...!!!",
                status: 500
            }, {
                status: 500
            })
        }
    }
}