import { useState, useEffect } from "react"
import api from "../../utils/api"
import { useNavigate } from "react-router-dom"


const LogIn = () => {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const navigate = useNavigate()

    const handleSubmit = async () => {
        if (!email || !password) {
            setError("Enter the details")
        }
        else {
            const credentials = {
                email: email,
                password: password
            }

            try {
                api.login(credentials).then(response => {
                    if(response.status == 200){
                        localStorage.setItem("token", response.data.token)
                        return  navigate("/")
                    }
                }).catch(err => {
                    setError(err.response.data.message)
                })
            }catch (err) {
                console.error(err)
            }
        }
    }



    return (
        <div className="flex justify-center m-[14%] font-poppins items-center">
            <div className="w-[100%] md:w-[50%]">
                <p className=" text-2xl font-semibold text-center mb-2">Login</p>
                <p className="text-red-500 text-center mb-5">{error}</p>
                <div className="w-[100%] flex flex-col gap-6">
                    <input type="email" placeholder="Email" className=" focus:outline-none text-base p-3 rounded-xl bg-transparent border-2 w-[100%]" required onChange={(e) => setEmail(e.target.value)} />
                    <div className=" w-[100%] rounded-xl bg-transparent border-2 flex items-center justify-between px-3">
                        <input type={show ? "text" : "password"} placeholder="Password" className="text-base w-[90%] py-3  bg-transparent focus:outline-none text-black" onChange={(e) => setPassword(e.target.value)} />
                        {show ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer" onClick={() => setShow(!show)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        ) :
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  cursor-pointer" onClick={() => setShow(!show)}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            )
                        }
                    </div>
                </div>
                <div className="mt-10">
                    <button className="w-[100%] text-white p-3 bg-[#6741D9] rounded-xl border-2 border-[#6741D9] hover:border-[#F0C3F1]" onClick={handleSubmit}>Sign in</button>
                    <p className="text-[#6741D9]  text-center mt-5 cursor-pointer hover:text-[#F0C3F1]">Forgotten Password ?</p>
                </div>
            </div>
        </div>
    )
}

export default LogIn