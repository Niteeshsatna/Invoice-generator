

import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}) {
    try {
        const invoice = await prisma.invoice.findUnique({
            where:{
                id: parseInt(id),
            },
            include: {
                tableData : true,
            },
            
        })
        
        console.log(invoice);
        return NextResponse.json(invoice)
    } catch (error) {
        return NextResponse.json({
            message:"Fail to Fetch Invoice",
             error
        },{status:500})
    }
    //fetch all invoice including the rows
}