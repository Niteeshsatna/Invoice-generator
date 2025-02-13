import db from "../../libs/db";
import { NextResponse } from "next/server";



export async function POST(request) {
  try {
    const { invoiceData, tableData } = await request.json();

    console.log(invoiceData);

    //2) create invoice using the invoice data

    console.log(invoiceData.userId)


    const invoice = await db.invoice.create({
      data: {
        userId: invoiceData.userId,
        invoiceTitle: invoiceData.invoiceTitle,
        companyName: invoiceData.companyName,
        invoiceAuthor: invoiceData.invoiceAuthor,
        companyAddress: invoiceData.companyAddress,
        companyCity: invoiceData.companyCity,
        companyCountry: invoiceData.companyCountry,
        clientCompany: invoiceData.clientCompany,
        clientAddress: invoiceData.clientAddress,
        clientCity: invoiceData.clientCity,
        clientCountry: invoiceData.clientCountry,
        invoiceNumber: invoiceData.invoiceNumber,
        invoiceDate: `${invoiceData.invoiceDate}T00:00:00Z`,
        invoiceDueDate: `${invoiceData.invoiceDueDate}T00:00:00Z`,
        notes: invoiceData.notes,
        tAndC: invoiceData.tAndC,
        totalSum:invoiceData.totalSum,
        totalTax: invoiceData.totalTax,
        totalAmountWithTax:invoiceData.totalAmountWithTax,
        logoUrl: invoiceData.logoUrl,
      },
    });
    //3) create the table using table data
    const rowsPromises = tableData.map(async (rowData) => {
      const row = await db.row.create({
        data: {
          invoiceId: invoice.id,
          itemDescription:rowData.itemDescription,
          qty: parseInt(rowData.qty),
          rate:parseFloat(rowData.rate),
          tax:parseFloat(rowData.tax),
          amount:parseFloat(rowData.amount),
        },
      });
      return row
    });

    const rows = await Promise.all(rowsPromises);

    console.log(invoice);

    return NextResponse.json(invoiceData);

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
      },
      { status: 500, }
    );
  }
}


export async function GET(request) {
    try {
        const invoices = await db.invoice.findMany({
          where:{
            userId
          },
          include: {
                tableData : true
            },
        });
        console.log(invoices)
        return NextResponse.json(invoices)
    } catch (error) {
        return NextResponse.json({
            message:"Fail to Fetch Invoices",
             error
        },{status:500})
    }
    //fetch all invoice including the rows
}
