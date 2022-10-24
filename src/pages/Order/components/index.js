import Body from './body'
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const Child = ({ info, data }) => {

    const [FilmInfo, setFilmInfo] = useState(null)
    const { apiData } = useSelector(s => s.data)
    useEffect(() => {
        if (apiData && data)
            setFilmInfo(Object.entries(apiData).map(e => e[1].find(e => e.id === info.id)).filter(obj => obj)[0])
    }, [data, apiData, info])
    return (
        <>
            <Body info={info} data={data} film={FilmInfo} />
        </>
    )
}

export default Child