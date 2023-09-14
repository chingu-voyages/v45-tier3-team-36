import { NavLink } from "react-router-dom"
import {useForm} from "react-hook-form"
import axios from "axios"
import {ImSpinner} from "react-icons/im"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ForgotPassword = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const form = useForm({
        mode: "onBlur"
    })

    const {register, handleSubmit, formState} = form
    const {errors, isDirty, isValid, isSubmitting} = formState

    const initPasswordReset = async (data) => {
        try {
            const response = await axios.post("https://talentbridge.onrender.com/api/user/initiate-password-reset", {
                email: data.email
            })
            //redirect user to reset password email page
            if (response.status === 200) {
                navigate("/forgot-password/initialize_password_reset")
            }
        } catch(error) {
            setError(error.response.data.error)
        }
    }
    return (
        <main className="mt-[2rem] md:mt-[.5rem]">
            <NavLink to="/" className="px-2 md:px-10 text-[1.1rem] md:text-[1.6rem] font-bold leading-normal text-secondary-500">TalentBridge</NavLink>
            <section className="md:w-[30%] mx-auto my-[5rem] w-[80%]">
                <p className="text-[1.3rem] md:text-[1.7rem] mb-6 font-medium leading-normal text-center">Recovery Email</p>
                <form className="flex flex-col gap-4" onClick={handleSubmit(initPasswordReset)} noValidate>
                    <label htmlFor="email" className="flex flex-col gap-2 text-[1rem] md:text-[1.26rem] font-normal leading-normal">
                        Email
                        <input className="border-2 border-secondary-500 py-2 px-2 text-[1rem] rounded-[0.25rem] outline-none" id="email" type="email" {...register("email",  {
                            required: {
                                value: true,
                                message: "email is required"
                            },
                            pattern: {
                                value:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "invalid email format"
                            }
                        })}/>
                        <p className="text-red-700 text-[.8rem]">{errors.email?.message}</p>
                    </label>
                    {
                      error !== "" &&  <p className="text-red-700 text-[.95rem]">{error}</p>
                    }
                    <button disabled={!isDirty || !isValid || isSubmitting}  className={`bg-button-400 py-2 text-primary-500 hover:bg-opacity-[0.7] rounded-[0.3rem] md:text-[1.1rem] mb-2 ${isSubmitting || !isDirty || !isValid ? "bg-opacity-[0.7] hover:bg-opacity-[0.7] " : ""}`}>{isSubmitting ? <ImSpinner className={`${isSubmitting ? "animate-spin bg-opacity-[0.7]" : "animate-none"} w-6 h-6`}/> : "Recover"}</button>
                </form>
            </section>
        </main>
    )
}

export default ForgotPassword