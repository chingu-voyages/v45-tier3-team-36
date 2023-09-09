import { NavLink } from "react-router-dom"

const SignIn = () => {
    return (
        <main className="my-[5rem]">
            <section className="md:w-[30%] mx-auto w-[80%]">
                <h1 className="text-[1.3rem] md:text-[1.7rem] mb-6 font-medium leading-normal text-center">Welcome to TalentBridge</h1>
                <form className="flex flex-col gap-4">
                    <label htmlFor="email" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Email
                        <input className="border-2 border-secondary-500 py-2 px-2 text-[1rem] rounded-[0.25rem] outline-none" id="email" type="email" required />
                    </label>
                    <label htmlFor="password" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Password
                        <input  className="border-2 py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" id="password" type="password" required />
                    </label>
                    <NavLink to="/forgot-password" className="hover:underline text-secondary-500 text-right mt-2">Forgot Password?</NavLink>
                    <button className="bg-button-400 py-2 text-primary-500 hover:bg-opacity-[0.9] rounded-[0.3rem] md:text-[1.1rem] mb-2">Login</button>
                </form>
                <p className=" md:text-[1.1rem] font-normal leading-normal text-center">No account yet? <NavLink to="/sign-up" className="hover:underline text-secondary-500 md:text-[1rem]">SignUp</NavLink></p>
            </section>
        </main>
    )
}

export default SignIn