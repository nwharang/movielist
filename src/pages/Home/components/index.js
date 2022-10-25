import { useEffect, useState } from 'react';
import Body from './body'
import Header from './header'
export default function App({ data }) {
    const [Loading, setLoading] = useState(null)
    useEffect(() => {
        if (data.status)
            setLoading(data.status)
    }, [data.status])
    return (
        <>
            <Header />
            {Loading !== "success" && <div className='w-full min-h-[50vh]'>
                <p className='text-white text-4xl font-black text-center p-10'>Loading ...</p>
            </div>}
            <Body data={data} />
        </>
    )
}