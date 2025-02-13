

export async function getInvoiceById(id) {
    const res = await fetch(` http://localhost:3000/api/invoice/${id} `,{
        cache:"no-store"
    });
    const invoice = await res.json()
    return invoice;
}