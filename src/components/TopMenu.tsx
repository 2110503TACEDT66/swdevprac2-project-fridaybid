import TopMenuItem from "./TopMenuItem"
import styles from './topmenu.module.css'
import { getServerSession } from "next-auth";
import { Link } from "@mui/material";
import { authOptions } from "@/libs/auth";

export default async function TopMenu() {
    const session = await getServerSession(authOptions)

    return (
        <div className={styles.menucontainer}>
            <TopMenuItem title='Home' pageRef='/' />
            <TopMenuItem title='CoworkingSpaces' pageRef='coworkings/' />
            <TopMenuItem title='About us' pageRef="aboutus/" />
            <div className='flex flex-row absolute right-0 h-full'>
                <TopMenuItem title="Cart" pageRef="/cart/" />
                <TopMenuItem title='Profile' pageRef="/profile/" />
                {
                    session ? <Link href="/api/auth/signout">
                        <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>Sign-Out</div>


                    </Link>
                        : (
                            <>
                                <Link href="/api/auth/signin">
                                    <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>Sign-In</div>
                                </Link>
                                <span><div className='flex items-center h-full px-2 text-cyan-600 text-sm'>
                                    /</div></span>
                                <Link href="/register">
                                    <div className='flex items-center h-full px-2 text-cyan-600 text-sm'>Register</div>
                                </Link>
                            </>
                        )











                }
            </div>
        </div>
    )
}