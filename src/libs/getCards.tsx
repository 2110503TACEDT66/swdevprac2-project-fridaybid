export default async function getCards(){
    // await new Promise( (resolve)=>setTimeout(resolve, 1000) )

    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/coworkings`)
    if(!response.ok) {
        throw new Error("Failed to fetch CoworkingSpaces")
    }

    return await response.json()
}