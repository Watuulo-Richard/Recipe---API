import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    try {
        const {data} = await request.json()
        const createRecipeTable = await db.tableRecipe.create({
            data
        })
        return NextResponse.json({
            message: "Recipe Table Created Successfully",
            data: createRecipeTable,
            error: null
        }, {
            status: 201
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Recipe Table Created Successfully",
            data: null,
            error: "Something Went Wrong"
        }, {
            status: 500
        })
    }
}

export async function GET(){
    try {
        const tableRecipes = await db.tableRecipe.findMany()
        return NextResponse.json({
            message: "Recipe Table fetched Successfully",
            data: tableRecipes,
            error: null
        }, {
            status: 201
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to fetch tableRecipes",
            data: null,
            error: "Something Went Wrong"
        }, {
            status: 500
        })
    }
}