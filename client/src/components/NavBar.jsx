const NavBar = () => {
    return (
        <nav className="md:py-2 bg-gradient-to-r from-secondary-500 to-secondary-400 text-primary-500">
            <div className="md:flex md:justify-between md:items-center md:w-[80%] md:mx-auto">
                <h1 className="text-[1.4rem] md:text-[1.6rem] font-normal leading-normal">TalentBridge</h1>
                <ul className="flex flex-col gap-6 md:flex-row">
                    <li><button className="nav-links px-4 py-1 rounded-[.2rem]">Home</button></li>
                    <li><button className="nav-links px-4 py-1 rounded-[.2rem]">Browse Jobs</button></li>
                    <li><button className="nav-links px-4 py-1 rounded-[.2rem]">About</button></li>
                </ul>
                <ul className="flex flex-col gap-6 md:flex-row md:items-center">
                    <li><button className="nav-links px-4 py-1 rounded-[.2rem]">Sign In</button></li>
                    <li><button className="text-[1rem] font-normal leading-normal cursor-pointer hover:opacity-[0.6] px-4 py-2 rounded-[.2rem] bg-primary-600">Post a Job</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar