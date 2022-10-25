import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Child from './components'
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import useFetchHook from 'hooks/useFetchHook';
import { Login } from 'components/Login';
export default function Contact() {
    useFetchHook("https://www.galaxycine.vn/api/movie/showAndComming", "data");
    useFetchHook("/api/all", "order")
    let { order } = useSelector((s) => s.order);
    const [Data, setData] = useState(null)
    const [Show, setShow] = useState(null)
    const { cinemaId, session, id } = useParams();
    const auth = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (!auth.token)
            setShow(true)
        if (order)
            setData(order)
    }, [order, auth, navigate])

    return (
        <>
            {Show && <Login Show={Show} setShow={setShow} />}
            <Child info={{ cinemaId, session, id }} data={Data} />
        </>
    )
}