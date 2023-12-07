import { useNavigate } from "react-router-dom"


const Nav = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <div>
            <div className='border-2 border-gray-200  p-5 w-[100%]'>
                <div className='flex items-center justify-between  md:justify-evenly '>
                    <div className='flex items-center gap-3 border-r-2  pr-10'>
                        <div className='bg-green-500  px-4  py-2 font-bold  rounded-full'>
                            <p className='text-white -rotate-45 text-3xl'>T</p>
                        </div>
                        <p className='text-xl font-extrabold'>TripTrip</p>
                    </div>
                    <div className=' gap-10 hidden lg:flex'>
                        <p className='text-xl font-semibold cursor-pointer'>Home</p>
                        <p className='text-xl font-semibold cursor-pointer'>Hotels</p>
                        <p className='text-xl font-semibold cursor-pointer'>Things to do</p>
                        <p className='text-xl font-semibold cursor-pointer'>Restaurant</p>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='md:flex gap-3 border-r-2 pr-10 hidden'>
                            <div className='border-2 p-2 rounded-full cursor-pointer hover:bg-gray-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                            </div>
                            <div className='border-2 p-2 rounded-full cursor-pointer hover:bg-gray-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </div>
                        </div>

                        <div className='border-2 p-2 rounded cursor-pointer hover:bg-gray-300' onClick={handleClick}>
                            <p>Log Out</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav