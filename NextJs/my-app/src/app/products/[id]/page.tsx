export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    return <div>Product details {id}</div>
}