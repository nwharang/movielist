
import { useAuth } from 'hooks/useAuth'
import { useEffect, useState } from 'react'
import Background from '../../../assets/bg.png'
export default function Header({ data }) {
    const auth = useAuth()
    const [User, setUser] = useState(null)
    useEffect(() => {
        if (auth.user) {
            setUser(auth.user)
        }
    }, [auth])

    return (
        <header className='pt-20'>
            <div className="w-full ">
                <div className="banner">
                    <div className="flex justify-end">
                        <img className='md:w-1/3 w-3/4 object-cover' src={Background} alt="" />
                    </div>
                    <div className="absolute top-1/4 md:left-10">
                        <div className="md:text-5xl text-4xl box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-gray-200 p-4 rounded-lg">
                            Hello, {User ? User : "World"}
                        </div>
                        <div className="md:text-2xl text-xl p-2 text-white">
                            Your Movie , Your Choise
                        </div>
                    </div>
                    <div className="flex justify-center ">
                        <div className="w-1/2 border-b-2 border-b-white/50"></div>
                    </div>
                </div>
            </div>
        </header>
    )
}