import { NavLink } from "react-router-dom"

const ResetPassword = () => {
    return (
        <main className="mt-[2rem] md:mt-[.5rem]">
            <NavLink to="/" className="px-2 md:px-10 text-[1.1rem] md:text-[1.6rem] font-bold leading-normal text-secondary-500">TalentBridge</NavLink>
            <section className="md:w-[30%] mx-auto w-[80%] my-[5rem]">
                <h1 className="text-[1.3rem] md:text-[1.7rem] mb-6 font-medium leading-normal text-center">Reset Password</h1>
                <form className="flex flex-col gap-4">
                    <label htmlFor="email" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Password
                        <input className="border-2 border-secondary-500 py-2 px-2 text-[1rem] rounded-[0.25rem] outline-none" id="email" type="password" required />
                    </label>
                    <label htmlFor="email" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Repeat Password
                        <input className="border-2 border-secondary-500 py-2 px-2 text-[1rem] rounded-[0.25rem] outline-none" id="email" type="password" required />
                    </label>
                    <button className="bg-button-400 py-2 text-primary-500 hover:bg-opacity-[0.9] rounded-[0.3rem] md:text-[1.1rem] mb-2">Reset</button>
                </form>
            </section>
        </main>
    )
}

export default ResetPassword