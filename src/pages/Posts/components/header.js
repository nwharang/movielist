
import { useEffect, useState } from 'react';
import Background from '../../../assets/bg.jpg'
export default function Header({ data, info }) {
    const [Data, setData] = useState(null)
    useEffect(() => {
        if (!data.apiData || !info) return setData(null)
        else setData(data.apiData[info.type].find(e => e.id === info.id));

    }, [info, data])

    return (
        <header className='pt-20'>
            <div className="w-full ">
                <div className="relative banner">
                    {Data ? <div className="flex justify-end md:px-32 md:py-20 ">
                        <div className='flex-1 md:flex-none p-3 bg-gradient-to-r box-decoration-clone from-indigo-600 to-pink-500 rounded-t-lg md:rounded-lg'>
                            <img className='md:w-96 w-full rounded-lg md:rounded-none' src={`https://www.galaxycine.vn${Data.imagePortrait}`} alt="" />
                        </div>
                    </div> :
                        <div className="flex justify-end">
                            <img className='h-1/2' src={Background} alt="" />
                        </div>}
                    <div className="top-1/4 left-0 md:absolute md:w-1/3">
                        <div className="md:text-4xl text-2xl font-bold bg-gradient-to-r box-decoration-clone from-indigo-600 to-pink-500 text-gray-200 p-4 rounded-b-xl md:rounded-none md:rounded-br-lg md:rounded-tr-lg md:w-full"  >
                            <p className='md:text-right text-center'>
                                {Data?.name}
                            </p>
                        </div>
                        <div className="md:text-2xl text-xl p-2 font-bold md:block hidden">
                            {Data?.subName}
                        </div>
                    </div>
                    <div className="absolute md:bottom-10 hidden md:block left-1/4 w-1/2 border-b-2 border-b-black opacity-30" />
                </div>
            </div>
        </header >
    )
}