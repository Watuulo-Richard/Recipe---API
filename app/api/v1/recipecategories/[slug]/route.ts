import { db } from "@/prisma/db";
import { CategoryRecipeType } from "@/Types/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest, {params}:{params:Promise<{slug:string}>}){
    try {
        const {slug} = await params
        
        const getSingleCategory = await db.categoryRecipe.findUnique({
            where : {
                slug 
            }
        })
        // console.log("Single Category ✅;", getSingleCategory);
        return NextResponse.json({
            message: "Single Category Recipe Fetched Successfully",
            data: getSingleCategory,
            error: null,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Single Category Recipe Fetched Successfully",
            data: null,
            error: "Something Went Wrong...!!!",
            status: 500
        }, {
            status: 500
        })
    }
}

export async function DELETE(request:NextRequest, {params}:{params:Promise<{slug:string}>}){
    try {
        const {slug} = await params
        const deleteCategoryRecipe = await db.categoryRecipe.delete({
            where : {
                slug : slug
            }
        })
        return NextResponse.json({
            message: "Single Category Recipe Deleted Successfully",
            data: deleteCategoryRecipe,
            error: null,
            status: 200
        }, {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Single Category Recipe Failed To Delete",
            data: null,
            error: "Something Went Wrong...!!!!",
            status: 500
        }, {
            status: 500
        })
    }
}

export async function PATCH(request:NextRequest, {params}:{params:Promise<{slug:string}>}) {
    try {
        const {slug} = await params
        const newData:CategoryRecipeType = await request.json()
        const updateCategoryRecipe = await db.categoryRecipe.update({
            where : {
                slug : slug
            },
            data : newData
        })
        return NextResponse.json({
            message: "Single Category Recipe Updated Successfully",
            data: updateCategoryRecipe,
            error: null,
            status: 200
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Single Category Recipe Failed To Update",
            data: null,
            error: "Something Went Wrong...!!!!",
            status: 500
        }, {
            status: 500
        })
    }
}