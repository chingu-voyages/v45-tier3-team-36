import { useState } from "react"
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'


const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    const mobileNavToggle = () => {
       setToggle(prev => !prev)
    }
    return (
        <div className="md:py-2 bg-gradient-to-r from-secondary-500 to-secondary-400 text-primary-500">
                <div className="flex justify-between items-center md:w-[90%] md:mx-auto px-2 py-2 md:px-0 md:py-0 relative">
                    <h1 className="text-[1.4rem] md:text-[1.6rem] font-bold leading-normal z-[25] md:z-auto">TalentBridge</h1>
                    {
                        toggle ? (
                            <AiOutlineClose onClick={mobileNavToggle} className="md:hidden w-8 h-8 z-[25]"/>
                        ) : (
                            <RxHamburgerMenu onClick={mobileNavToggle} className="md:hidden w-8 h-8 z-[25]"/>
                        )
                    }
                    <nav className={`bg-secondary-500 text-primary-600 md:text-primary-500 md:bg-transparent flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between items-center md:w-full fixed md:static pt-20 md:pt-0  transition-all duration-[0.15s] mobile-nav ease-in md:z-auto z-[20] ${toggle ? "right-0" : "right-[-100%]"}`}>
                        <ul className="flex flex-col gap-2 md:gap-4 md:flex-row md:mx-auto items-center">
                            <li><button className="nav-links">Home</button></li>
                            <li><button className="nav-links">Jobs</button></li>
                            <li><button className="nav-links">About</button></li>
                        </ul>
                        <ul className="flex flex-col gap-2 md:gap-4 md:flex-row items-center">
                            <li><button className="nav-links">Sign In</button></li>
                            <li><button className="nav-links">Sign Up</button></li>
                            <li><button className="text-[1rem] font-bold md:font-normal cursor-pointer hover:opacity-[0.6] px-4 py-2 rounded-[.2rem] bg-primary-600 text-primary-500">Post a Job</button></li>
                        </ul>
                    </nav>
                </div>
        </div>
    )
}

export default NavBar