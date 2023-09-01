import { NavLink } from "react-router-dom"

const SignUp = () => {
    return (
        <main className="mt-[3rem]">
            <section className="md:w-[30%] mx-auto w-[80%]">
                <h1 className="text-[1.3rem] md:text-[1.7rem] mb-6 font-medium leading-normal text-center">Welcome to TalentBridge</h1>
                <form className="flex flex-col gap-4">
                    <label htmlFor="firstname" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Firstname
                        <input  className="border-2 py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" type="text" required id="firstname"/>
                    </label>
                    <label htmlFor="lastname" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Lastname
                        <input  className="border-2 py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" type="text" required id="lastname"/>
                    </label>
                    <label htmlFor="email" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Email
                        <input  className="border-2 py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" type="email" required id="email"/>
                    </label>
                    <label htmlFor="password" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Password
                        <input  className="border-2 py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" id="password" type="password" required />
                    </label>
                    <button className="bg-button-400 py-2 text-primary-500 hover:bg-opacity-[0.9] rounded-[0.3rem] md:text-[1.1rem] mb-2">Sign Up</button>
                </form>
                <p className=" md:text-[1.1rem] font-normal leading-normal text-center">Already have an account? <NavLink to="/sign-in" className="hover:underline text-secondary-500 md:text-[1rem]">SignIn</NavLink></p>
            </section>
        </main>
    )
}

export default SignUp