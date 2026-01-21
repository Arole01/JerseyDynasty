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
        email:Yup.string().required("Enter a valid email").trim().email(), 
        password: Yup.string() 
        .required("Password is required") 
        .min(8, "Password must be at least 8 characters") 
        .max(10, "Password must not exceed 10 characters") 
        .matches( /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,10}$/, "Password should contain uppercase, lowercase, number, and special character" ) 
    })

    const { handleSubmit, register, formState: { errors} } = useForm({
        resolver: yupResolver(schema)
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
        <div className='login-page'>
            <form className="form-container" onSubmit={handleSubmit(Submit)}>
                <h2>Login</h2>
                <input className='user'
                    type='text'
                    placeholder='Email'
                    {...register("email")}/>
                    {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}

                    <input className='pass'
                        type={showPassword ? "text" : "password"}
                        placeholder='Password'
                        {...register("password")}/>
                        {errors.password && <p style={{color: "red"}}>{errors.password.message}</p>}
                        
                        <div className='checkbox-contaner'>
                            <input
                                type='checkbox'
                                id='showPassword'
                                onChange={(e) => setShowPassword(e.target.checked)}/>
                                <label htmlFor='showPassword'>Show password</label>
                        </div>

                        <button className='submit' type='submit' disabled={loading}>
                            {loading ? "Signing In..." : "Login"}
                        </button>
            </form>

            <p className="signup-link">New user?👇
        <Link to="/signup">
            <button className="btnn">Sign up</button>
        </Link>
        </p>
        </div>
    )
}