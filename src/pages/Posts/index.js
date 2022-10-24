import Child from './components'
import useFetchHook from '../../hooks/useFetchHook'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
export default function Home() {
    const { type, id } = useParams();
    const [Info, setInfo] = useState({ type, id })
    useFetchHook("https://www.galaxycine.vn/api/movie/showAndComming", "data");
    useFetchHook(`https://www.galaxycine.vn/api/session/movie/${id}?`, "session")
    const apiData = useSelector((s) => s.data);
    useEffect(() => {
        setInfo({ type, id })
    }, [type, id])
    return (
        <>
            <Child data={apiData} info={Info} />
        </>
    )
}

