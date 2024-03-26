import ReservationCart from "@/components/ReservationCart"
import getReservations from "@/libs/getReservations"
import { authOptions } from "@/libs/auth";
import { getServerSession } from "next-auth";

export default async function CartPage(){
    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return

    const reservations = getReservations(session.user.token)

    return (
        <main>
            <ReservationCart reserveJson={reservations}></ReservationCart>
        </main>
    )
}