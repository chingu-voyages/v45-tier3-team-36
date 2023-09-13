import { NavLink } from "react-router-dom"
import {useForm} from "react-hook-form"
import {ImSpinner} from "react-icons/im"
import axios from "axios"

const SignIn = () => {
    const form = useForm({
        mode: "onBlur"
    })

    const {register, handleSubmit, formState} = form
    const {errors, isDirty, isValid, isSubmitting} = formState

    const signInUser = async (data) => {
        try {
            const response = await axios.post("https://talentbridge.onrender.com/api/user/login", {
                email: data.email,
                password: data.password
        })
        if(response.ok) {
            //give user access and redirect user profile
            console.log(response)
        }
        }catch(err) {
            console.log(err)
        }
    }

    return (
        <main className="my-[5rem]">
            <section className="md:w-[30%] mx-auto w-[80%]">
                <h1 className="text-[1.3rem] md:text-[1.7rem] mb-6 font-medium leading-normal text-center">Welcome to TalentBridge</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(signInUser)} noValidate>
                    <label htmlFor="email" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Email
                        <input className="border-2 border-secondary-500 py-2 px-2 text-[1rem] rounded-[0.25rem] outline-none" id="email" type="email"  {...register("email", {
                            required: {
                                value: true,
                                message: "email is required"
                            },
                            pattern: {
                                value:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Invalid email format"
                            }
                        })}/>
                        <p className="text-red-700 text-[.8rem]">{errors.email?.message}</p>
                    </label>
                    <label htmlFor="password" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Password
                        <input  className="border-2 py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" id="password" type="password" {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required"
                            }
                        })}/>
                        <p className="text-red-700 text-[.8rem]">{errors.password?.message}</p>
                    </label>
                    <NavLink to="/forgot-password" className="hover:underline text-secondary-500 text-right mt-2">Forgot Password?</NavLink>
                    <button disabled={!isDirty || !isValid || isSubmitting} className={`bg-button-400 py-2 text-primary-500 hover:bg-opacity-[0.7] rounded-[0.3rem] md:text-[1.1rem] mb-2 ${isSubmitting || !isDirty || !isValid ? "bg-opacity-[0.7] hover:bg-opacity-[0.7] " : ""}`}>{isSubmitting ? <ImSpinner className={`${isSubmitting ? "animate-spin bg-opacity-[0.7]" : "animate-none"} w-6 h-6`}/> : "Login"}</button>
                </form>
                <p className=" md:text-[1.1rem] font-normal leading-normal text-center">No account yet? <NavLink to="/sign-up" className="hover:underline text-secondary-500 md:text-[1rem]">SignUp</NavLink></p>
            </section>
        </main>
    )
}

export default SignIn