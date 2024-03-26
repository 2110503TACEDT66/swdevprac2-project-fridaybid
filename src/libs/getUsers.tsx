export default async function getUsers(token:string) {
    
    const response = await fetch(`https://coworking-be.vercel.app/api/v1/users`,{
        method:"GET",
        headers: {
            authorization:`Bearer ${token}`,
        }
    })

    if(!response.ok) {
        throw new Error("Failed to fetch Reservation")
    }

    return await response.json()

}  

//libs