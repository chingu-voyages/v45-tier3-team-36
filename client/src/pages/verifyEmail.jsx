import {GoVerified} from "react-icons/go"
import { NavLink } from "react-router-dom"

const VerifyEmail = () => {
    return (
        <main>
            <div className="flex flex-col justify-center items-center mt-[5rem] gap-4">
                <div className="bg-[#4ade80] px-[1.3rem] py-[1.2rem] rounded-[4rem] ">
                    <GoVerified className="text-primary-500 md:w-[6rem] md:h-[6rem] w-[4rem] h-[4rem]"/>
                </div>
                <h1 className="text-[1.1rem] text-center">We have successfully verified your email. You can now proceed to login page</h1>
                <NavLink to="/login" className="bg-secondary-500 text-primary-500 px-[.7rem] py-[.5rem] rounded-[.2rem] hover:bg-opacity-[0.95]">Go to Login</NavLink>
            </div>
        </main>
    )
}

export default VerifyEmail