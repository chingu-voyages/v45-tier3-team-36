import { NavLink } from "react-router-dom"
import {useForm} from "react-hook-form"

const SignUp = () => {
    const form = useForm({
        mode: "onBlur"
    })

    const {register, handleSubmit, formState} = form

    const {errors, isDirty, isValid, isSubmitting} = formState

    const submitForm = (data) => {
        console.log(data)
    }

    return (
        <main className="mt-[3rem]">
            <section className="md:w-[30%] mx-auto w-[80%]">
                <h1 className="text-[1.3rem] md:text-[1.7rem] mb-6 font-medium leading-normal text-center">Welcome to TalentBridge</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(submitForm)} noValidate>
                    <label htmlFor="firstname" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Firstname
                        <input  className="border-2 py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" type="text" id="firstname" {...register("firstname", {
                            required: {
                                value: true,
                                message: "firstname is required"
                            }
                        })}/>
                        <p className="text-red-700 text-[.8rem]">{errors.firstname?.message}</p>
                    </label>
                    <label htmlFor="lastname" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Lastname
                        <input  className="border-2 py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" type="text" id="lastname" {...register("lastname", {
                            required: {
                                value: true,
                                message: "lastname is required"
                            }
                        })}/>
                        <p className="text-red-700 text-[.8rem]">{errors.lastname?.message}</p>
                    </label>
                    <label htmlFor="email" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Email
                        <input  className="border-2 py-2 px-2 text-[1rem] border-secondary-500 rounded-[0.25rem] outline-none" type="email" id="email" {...register("email", {
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
                    <button disabled={!isDirty || !isValid || isSubmitting} className="bg-button-400 py-2 text-primary-500 hover:bg-opacity-[0.9] rounded-[0.3rem] md:text-[1.1rem] mb-2">Sign Up</button>
                </form>
                <p className=" md:text-[1.1rem] font-normal leading-normal text-center">Already have an account? <NavLink to="/login" className="hover:underline text-secondary-500 md:text-[1rem]">login</NavLink></p>
            </section>
        </main>
    )
}

export default SignUp