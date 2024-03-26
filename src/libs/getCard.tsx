export default async function getCard(id:string){

    const response = await fetch(`https://coworking-be.vercel.app/api/v1/coworkings/${id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch CoworkingSpace")
    }

    return await response.json()
}