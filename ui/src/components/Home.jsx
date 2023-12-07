import { useEffect, useState } from "react"
import Add from "./Add"
import Nav from "./Nav"
import api from "../../utils/api"

const Home = () => {

    const [data, setData] = useState([])


    const fetchData = () => {
        try {
            api.get().then(response => {
                if (response.status == 200) {
                    setData(response.data.data)
                }
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)

    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className="p-6">
                <p className="text-3xl font-bold">Hotels</p>
                <Add fetch={fetchData} />
            </div>

            <div className="p-6 overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 border border-gray-300">Hotel Code</th>
                            <th className="py-2 px-4 border border-gray-300">Hotel Name</th>
                            <th className="py-2 px-4 border border-gray-300">Hotel City</th>
                            <th className="py-2 px-4 border border-gray-300">City Code</th>
                            <th className="py-2 px-4 border border-gray-300">Hotel Country</th>
                            <th className="py-2 px-4 border border-gray-300">Country Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(info => {
                            return (
                                <tr key={info.id}>
                                    <td className="py-2 px-4 border border-gray-300">{info.id}</td>
                                    <td className="py-2 px-4 border border-gray-300">{info.h_name}</td>
                                    <td className="py-2 px-4 border border-gray-300">{info.city}</td>
                                    <td className="py-2 px-4 border border-gray-300">{info.city_code}</td>
                                    <td className="py-2 px-4 border border-gray-300">{info.country}</td>
                                    <td className="py-2 px-4 border border-gray-300">{info.country_code}</td>
                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home