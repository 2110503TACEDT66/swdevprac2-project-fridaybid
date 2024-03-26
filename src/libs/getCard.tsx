export default async function getCard(id:string){

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/coworkings/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch CoworkingSpace")
    }

    return await response.json()
}