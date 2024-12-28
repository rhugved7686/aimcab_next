import Visitor from "../../../../model/Queries";
import { NextResponse } from "next/server";


export const GET = async (req,{params})=>{
    try {
        const {bookid} =await params;
        console.log(bookid);
        const data = await Visitor.findOne({where:{bookid}});

        

        return NextResponse.json({message:"Fetch visitor details successfully", data});
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"Fetch visitor details failed", error});
    }
}