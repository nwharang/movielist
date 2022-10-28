import { useState, useEffect } from 'react'
import { decode } from 'html-entities'
import { Link } from 'react-router-dom'

export default function Body({ data }) {
    return (
        <>
            <Content data={data} />
        </>
    )
}

function Content({ data }) {
    const [Data, setData] = useState("")
    const [Hover, setHover] = useState(null)
    const [State, setState] = useState("button-2")
    const handlerMouseHover = (e, i) => {
        setHover(e.target.id)
    }
    const handlerMouseOut = () => {
        setHover(null)
    }
    const handlerButton = (e) => {

        document.getElementById(State).disabled = false
        setState(e.target.id)
    }
    useEffect(() => {
        document.getElementById(State).disabled = true
    }, [State])

    useEffect(() => {
        if (data.status === "success") {
            setData(
                <>
                    {State === "button-1" ? data.apiData.movieCommingSoon.map((v, i) => {
                        return (
                            <div className='w-full relative flex text-white justify-center ' key={i} onMouseEnter={handlerMouseHover} onMouseOut={handlerMouseOut} >
                                <img className='w-full rounded-lg' src={`https://www.galaxycine.vn${v.imagePortrait}`} alt="" />
                                {Hover === i.toString() ? <div className="absolute block bottom-0 h-full w-full rounded-lg" id={i} style={Style.Content} >
                                    <p className=' text-lg font-black ' style={Style.Title}>
                                        {v.name}
                                    </p>
                                    <p className='text-lg font-bold' style={Style.SubTitle}>
                                        {v.subName}
                                    </p>
                                    <p>
                                        {decode(v.shortDescription.replace(/(<([^>]+)>)/ig, ''))}
                                    </p>
                                    <div className='absolute bottom-3 right-3 p-3 bg-red-500 rounded-lg'>
                                        {Math.floor(v.point)}
                                    </div>
                                    <div className='absolute bottom-3 left-3 p-3 bg-red-500 rounded-lg'>
                                        {"Khởi chiếu: " + new Date(v.startdate).toLocaleDateString()}
                                    </div>
                                </div> : ""}
                                <Link to={`posts/movieCommingSoon/${v.id}`} preventScrollReset={true} className="absolute h-full w-full shadow-2xl shadow-slate-900 border-transparent border-2 rounded-lg" id={i} />
                            </div>
                        )
                    }) :
                        data?.apiData.movieShowing.map((v, i) => {
                            return (
                                <div className='w-full relative flex text-white justify-center' key={i} onMouseEnter={handlerMouseHover} onMouseOut={handlerMouseOut} >
                                    <img className='w-full rounded-lg' src={`https://www.galaxycine.vn${v.imagePortrait}`} alt="" />
                                    {Hover === i.toString() ? <div className="absolute block bottom-0 h-full w-full rounded-lg" id={i} style={Style.Content} >
                                        <p className=' text-lg font-black ' style={Style.Title}>
                                            {v.name}
                                        </p>
                                        <p className='text-lg font-bold' style={Style.SubTitle}>
                                            {v.subName}
                                        </p>
                                        <div className='absolute bottom-3 right-3 p-3 bg-red-500 rounded-lg'>
                                            {Math.floor(v.point)}
                                        </div>
                                        <div className='absolute bottom-3 left-3 p-3 bg-red-500 rounded-lg'>
                                            {"Khởi chiếu: " + new Date(v.startdate).toLocaleDateString()}
                                        </div>
                                    </div> : ""}
                                    <Link to={`posts/movieShowing/${v.id}`} preventScrollReset={true} className="absolute h-full w-full shadow-2xl shadow-slate-900 border-transparent border-2 rounded-lg" id={i} />
                                </div>
                            )
                        })}
                </>
            )
        }
    }, [data, Hover, State])
    return (
        <>
            <div className='text-xl font-mono font-bold text-white text-center mt-5 '>
                <button className="rounded-lg m-3 p-2 border-transparent outline-none bg-slate-400 hover:outline-1 hover:outline-slate-400 hover:bg-slate-500 disabled:text-gray-700 disabled:bg-stale-800 disabled:hover:outline-none disabled:hover:bg-slate-400" id="button-2" onClick={handlerButton}>Phim đang chiếu</button>
                <button className="rounded-lg m-3 p-2 border-transparent outline-none bg-slate-400 hover:outline-1 hover:outline-slate-400 hover:bg-slate-500 disabled:text-gray-700 disabled:bg-stale-800 disabled:hover:outline-none disabled:hover:bg-slate-400" id="button-1" onClick={handlerButton}>Phim sắp chiếu</button>
            </div >
            <div className=' container mx-auto  grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-10 mt-5 p-5'>
                {Data}
            </div>
        </>
    )
}

const Style = {
    Content: {
        background: "rgba(0,0,0,0.7)",
        padding: "1rem",
    },
    Title: {
        padding: "0.5rem 0"
    },
    SubTitle: {
        padding: "0.5rem 0"
    }
}