export default async function updateReservation(token: string, reservationItem: any){
    const response = await fetch(`${process.env.BACKEND_URL}/api/v1/reservations/${reservationItem.reserveId}`, {
        method: 'PUT',
        headers: {
            "authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            reserveDateStart: reservationItem.reserveDateStart,
            reserveDateEnd: reservationItem.reserveDateEnd,
        })
    })

    const json = await response.json()

    if(!response.ok) {
        throw new Error(json.message); 
    }

    return json

}