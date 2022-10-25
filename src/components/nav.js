
import { useAuth } from "hooks/useAuth";
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Login, Logout } from "components/Login";
import Background from '../assets/logo512.png'
import { UserCircleIcon } from '@heroicons/react/24/solid'
export default function Nav() {
    const auth = useAuth()
    const [isLogin, SetisLogin] = useState(auth.user ? true : false)
    const [Show, setShow] = useState(false)
    const handleLogin = () => {
        setShow(!Show)
    }
    useEffect(() => {
        if (auth.user)
            SetisLogin(true)
        else
            SetisLogin(false)
    }, [auth])

    const style = ({ isActive }) => isActive ? "p-3 bg-red-500 rounded-full text-white border-red-500 border-2 border-transparent " : "p-3 border-2 rounded-full border-red-500 hover:border-red-300 border-transparent "
    return (
        <nav className="fixed w-full flex flex-col justify-center items-center text-red-500 z-50 bg-transparent/50 transition-all">
            <div className="flex w-full md:h-20 h-16 justify-between md:justify-around items-center">
                <Link to="/" className="flex h-5/6 flex-row justify-center items-center gap-1">
                    <img className="h-full p-1" src={Background} alt="" />
                    <p className='hidden md:block bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-black text-xl'>Wharang</p>
                </Link>
                <form className="w-1/3 hidden md:block">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block p-2 pl-10 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 " placeholder="Tìm tên phim" required />
                        <button type="submit" className="text-white absolute right-0 bottom-0.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                    </div>
                </form>
                <ul className="flex md:flex-row justify-end items-center gap-1 md:gap-2 text-sm ">
                    <li >
                        <NavLink to="/" end className={style}>Home</NavLink>
                    </li>
                    <li >
                        <NavLink to="/about" className={style}>About</NavLink>
                    </li>
                    <li>
                        {isLogin ? Show && <Logout Show={Show} setShow={setShow} /> : Show && <Login Show={Show} setShow={setShow} />}
                        {!Show && <button
                            className="bg-black p-3 rounded-full text-white font-bold hover:border-red-500 border-2 flex flex-row gap-2"
                            onClick={handleLogin}>
                            {isLogin ? auth.user.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()) : "Login"}
                            <UserCircleIcon className="h-6 w-6" />
                        </button>}
                    </li>
                </ul>
            </div>
            <div className="w-full md:w-11/12 border-red-500/75 border"></div>
        </nav >
    )
}