import { useState } from "react"
import { useForm } from "react-hook-form"
import api from "../../utils/api"

const Add = ({fetch}) => {

    const [isAdding, setAdding] = useState(false)

    const { register, handleSubmit,reset, formState: { errors }, } = useForm()

    const submit = async (data) => {
        try{
            api.add(data).then(response => {
                if(response.status == 200){
                    setAdding(false)
                    fetch()
                    reset()
                }
            })
        }catch(err){
            console.log(err)
        }
    }

    const cancel = () => {
        setAdding(false)
        reset()
    }

    return (
        <div className="mt-8">
            <div>
                {isAdding ?
                    (<div>
                        <form onSubmit={handleSubmit(submit)}>
                            <div className="flex gap-4">
                                <button onClick={cancel} className="border-2 rounded-lg px-4 hover:bg-gray-300 py-1">Cancel</button>
                                <button type="submit" className="border-2 rounded-lg px-4 py-1 bg-green-500 hover:bg-green-400 text-white">Save</button>
                            </div>

                            <div className="mt-4 flex gap-16 justify-start">
                                <div>
                                    <p className="font-bold">Hotel Name</p>
                                    <input type="text" placeholder="Hotel Name" {...register("hotel", { required: true })} className="p-1 w-96 border-2 rounded" />
                                    {errors.hotel?.type === "required" && (
                                        <p role="alert" className="text-red-500 text-sm">Hotel name is required</p>
                                    )}
                                </div>

                                <div>
                                    <p className="font-bold">City Code</p>
                                    <input type="number" placeholder="City Code"  {...register("City_code", { required: true })} className="p-1  border-2 rounded" />
                                    {errors.City_code?.type === "required" && (
                                        <p role="alert" className="text-red-500 text-sm">City Code is required</p>
                                    )}
                                </div>

                                <div>
                                    <p className="font-bold">Country Code</p>
                                    <input type="number" placeholder="Country Code"  {...register("Country_code", { required: true })} className="p-1  border-2 rounded" />
                                    {errors.Country_code?.type === "required" && (
                                        <p role="alert" className="text-red-500 text-sm">Country Code is required</p>
                                    )}
                                </div>
                            </div>
                        </form>

                    </div>) :
                    (<div onClick={() => { setAdding(true) }}>
                        <div className="flex px-3">
                            <div className="flex cursor-pointer gap-3 hover:bg-green-400 items-center px-4 py-2 bg-green-600 border-gray-200 border-2 shadow-xl rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <p className="text-lg text-white">Add Hotel</p>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Add