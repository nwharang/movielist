import Background from '../assets/logo512.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='flex flex-col bg-gray-800 min-h-[20vh] mt-5 text-white md:mx-20 mx-2 rounded-t-3xl p-3 shadow-xl shadow-black/80 border border-black/20 items-center'>
            <div className='flex flex-1 items-center drop-shadow-xl'>
                <Link to="/" className="flex-1 flex justify-center items-center gap-1 my-3">
                    <div className='h-14'>
                        <img className=" h-full p-1" src={Background} alt="" />
                    </div>
                    <p className=' bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-black text-xl'>Wharang</p>
                </Link>
            </div>
            <div className='w-full flex flex-1 flex-col md:flex-row justify-evenly md:text-center gap-5'>
                <div className="flex flex-col flex-1">
                    <div className='font-bold text-xl'>
                        Navigate
                    </div>
                    <div>
                        Home
                    </div>
                    <div>
                        About
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className='font-bold text-xl'>
                        Term
                    </div>
                    <p>ToS</p>
                    <p>Claim</p>
                </div>
                <div className="flex flex-col flex-1">
                    <div className='font-bold text-xl'>
                        Contact
                    </div>
                    <div>
                        Address: 116 Old Grandrose Street Midland, MI 48640
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className='font-bold text-xl'>
                        Social
                    </div>
                    <div className='flex flex-row md:justify-center text-blue-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </div>
                </div>
            </div>
            <div className='w-1/2 border-t-2 border-red-500/30 mt-5 text-center text-lg p-2'>
                Copyright <a className="text-blue-500" href="wharang.fun">@Wharang</a> 2022
            </div>
        </div>
    )
}

export default Footer