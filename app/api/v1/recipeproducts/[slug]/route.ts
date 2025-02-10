import { db } from "@/prisma/db";
import { RecipeType } from "@/Types/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, {params}:{params:Promise<{slug:string}>}){
    try {
        const {slug} = await params
        const getSingleProducts = await db.recipeProduct.findUnique({
            where : {
                slug : slug
            },
        })
        return NextResponse.json({
            message: "success",
            data: getSingleProducts,
            error: null
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to fetch single product",
            data: null,
            error: "something went wrong"
        })
    }
}

export async function DELETE(request:NextRequest, {params}:{params:Promise<{slug:string}>}){
    try {
        const {slug} = await params
        const deleteRecipe = await db.recipeProduct.delete({
            where : {
                slug : slug
            }
        })
        return NextResponse.json({
            message: "Recipe Deleted Successfully",
            data: deleteRecipe,
            error: null
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failed To Delete Recipe",
            data: null,
            error: "something went wrong"
        }, {
            status: 500
        })
    }
}

export async function PATCH(request:NextRequest, {params}:{params:Promise<{slug:string}>}){
    try {
        const newData:RecipeType = await request.json()
        const {slug} = await params
        const updateRecipe = await db.recipeProduct.update({
            where : {
                slug : slug
            },
            data: newData
        })
        return NextResponse.json({
            message: "Recipe Updated Successfully",
            data: updateRecipe,
            error: null
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failed To Update Recipe",
            data: null,
            error: "something went wrong"
        }, {
            status: 500
        })
    }
}