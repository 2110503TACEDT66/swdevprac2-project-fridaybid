export default async function deleteReservation(token: string, id: string){
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`
        }
    })

    if(!response.ok){
        throw new Error("Failed to Delete Reservation")
    }

    return await response.json()
}