import { useContext, useState} from 'react'
import { AppContext } from './authContext'
import { useNavigate, Link, data } from 'react-router-dom'
import * as Yup from "yup"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import "./Login.css"


export const Login = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { loginAuth } = useContext(AppContext)


    const schema = Yup.object({
        email:("Enter a valid email"), password: Yup.string() 
        .required("Password is required") 
        .min(8, "Password must be at least 8 characters") 
        .max(10, "Password must not exceed 10 characters") 
        .matches( /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,10}$/, "Password should contain uppercase, lowercase, number, and special character" ) 
    })

    const { handleSubmit, register, formState: { errors} } = useForm({
        resolver: yupRelsover(schema)
    })

    const [showPassword, setShowPassword] = useState(false)

    const Submit = async (data) => {
        try {
            setLoading(true)

            if (data.email === "ajosedavidayobami@gmail.com" && data.password === "Password1!") {
                loginAuth({ user : { email: data.email }})
                toast.success("Login successful")
                navigate("/")
            } else {
                toast.error("Invalid credentials")
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit(Submit)}>
                <input className='user'
                    type='text'
                    placeholder='Email'
                    {...register("email")}/>
                    {errors.email && <p style={{color:"red"}}>{errors.email.messsage}</p>}
            </form>
        </div>
    )
}