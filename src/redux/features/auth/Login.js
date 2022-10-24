import Pepe from '../../../assets/pepe.gif'
import { useState, useEffect, useRef } from 'react'
import { logOut, setCredentials } from 'redux/features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from './authApiSlice'
import { useAuth } from 'hooks/useAuth'


export const Logout = ({ Show, setShow }) => {
    const [Loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        let Timer = setTimeout(() => {
            console.log("Loged Out");
            dispatch(logOut())
            setLoading(false)
            setShow(false)
        }, 1000)
        return () => clearTimeout(Timer)
    }, [Loading, dispatch, Show, setShow])
    return Loading && (
        <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="red" strokeWidth="4"></circle>
            <path className="opacity-75" fill="red" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>)
}
export const Login = ({ Show, setShow }) => {
    const auth = useAuth();
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const dispatch = useDispatch()


    const [login, { isLoading }] = useLoginMutation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const userData = await login({ user, pwd }).unwrap()
            dispatch(setCredentials({ ...userData, user }))
            setUser('')
            setPwd('')
            setShow(!Show)
        } catch (err) {
            if (!err?.status) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)

    const handlePwdInput = (e) => setPwd(e.target.value)


    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    useEffect(() => {
        if (!auth.user && Show)
            userRef.current.focus()
    }, [auth, Show])

    useEffect(() => {
        const a = document.getElementById("modal")
        if (Show && a)
            a.addEventListener("click", () => { setShow(!Show) })
    }, [Show, setShow])


    if (Show)
        return isLoading ? (
            <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="red" strokeWidth="4"></circle>
                <path className="opacity-75" fill="red" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>)
            : !auth.user && (
                <div className='fixed w-full h-full z-50 top-0 left-0' >
                    <div className='fixed bg-black/50 w-full h-full top-0' id="modal" ></div>
                    <div className='fixed md:w-1/2 md:h-1/2 md:top-1/4 md:left-1/4 justify-center items-center m-3 md:m-0'>
                        <div className='w-full h-full'>
                            <div className='w-full h-full bg-white border-4 border-pink-600 rounded-xl flex flex-col md:flex-row divide-x-4 md:divide-pink-500/25'>
                                <div className='w-2/5 md:flex flex-col justify-center items-center bg-black/75 rounded-l-lg hidden'>
                                    <img className='w-full' src={Pepe} alt="" />
                                    <p className='text-center text-white text-lg font-bold font-mono'>No Perfect Background</p>
                                </div>
                                <div className='flex-1 rounded-r-xl'>
                                    <form className='relative p-5 w-full h-full' onSubmit={handleSubmit}>
                                        <div className='py-5 text-center text-xl font-bold font-mono'>
                                            Login
                                            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                                        </div>

                                        <div className="mb-6">
                                            <input
                                                className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                                type="text"
                                                id="username"
                                                ref={userRef}
                                                value={user}
                                                onChange={handleUserInput}
                                                autoComplete="off"
                                                required
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <input
                                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                type="password"
                                                id="password"
                                                onChange={handlePwdInput}
                                                value={pwd}
                                                required
                                            />
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <button
                                                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                            >
                                                Login
                                            </button>
                                        </div>
                                        <div className='p-2 text-lg'>
                                            <p>Username 400 401 403 404 để test lỗi</p>
                                            <p>Username nào cũng vào được</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
}
