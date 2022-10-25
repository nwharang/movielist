import { useState, useEffect } from 'react'
import { decode } from 'html-entities'
import { useSelector } from 'react-redux'
import { useAuth } from "hooks/useAuth";
import { Login } from 'components/Login'
import { useNavigate } from 'react-router-dom'
import Youtube from './Youtube'
function Ticket({ session, info }) {
    const navigate = useNavigate()
    const auth = useAuth()
    const [Show, setShow] = useState(false)
    const [Selection, setSelection] = useState({ cine: null, date: null })
    function handleChangeCine(e) {
        setSelection({ ...Selection, cine: e.target.value })
        e.preventDefault()
    }
    function handleChangeDate(e) {
        setSelection({ ...Selection, date: e.target.value })
        e.preventDefault()
    }
    function handleClick(e) {
        if (!auth.token)
            setShow(!Show)
        if (auth.token) {
            const [a, b] = e.target.id.split("-")
            navigate(`/order/${b}/${a}/${info.id}`)
        }
    }

    useEffect(() => {
        if (!Selection.cine) {
            document.getElementById("ngaychieu").disabled = true;

        } else document.getElementById("ngaychieu").disabled = false;
    }, [Selection])


    return (
        <>
            <form className="flex p-5 gap-5 flex-col mb-5 ">
                <div className='flex flex-row gap-5 justify-between'>
                    <label htmlFor="rap" className='text-lg text-white'>Rạp đang công chiếu</label>
                    <select id="rap" name="rap" defaultValue={""} className='w-3/5 p-2 rounded-3xl outline-none focus:outline-2 outline-slate-400' onChange={handleChangeCine} >
                        <option value="" disabled >Vui lòng chọn rạp chiếu</option>
                        {session ? session.session.map((v, i) => {
                            return (
                                <option key={i} value={i}>{v.name}</option>
                            )
                        }) : ""}
                    </select>
                </div>
                <div className='flex flex-row gap-5 justify-between'>
                    <label htmlFor="ngaychieu" className='text-lg text-white'>Chọn ngày xem</label>
                    <select id="ngaychieu" name="ngaychieu" defaultValue={""} className='w-3/5 p-2 rounded-3xl outline-none focus:outline-2 outline-slate-400 disabled:bg-slate-400 ' onChange={handleChangeDate}>
                        <option value="" disabled >{Selection.cine ? "Vui lòng chọn ngày xem" : ""}</option>
                        {Selection.cine ? session.session[Selection.cine].dates.map(((v, i) => {
                            return (
                                <option key={i} value={i}>{v.dayOfWeekLabel + " " + v.showDate}</option>)
                        })) : ""}
                    </select>
                </div>
            </form>
            {Selection.date ? <div className='p-5 bg-gray-200 border-2 border-gray-400 mx-5 rounded-xl '>
                {session.session[Selection.cine].dates[Selection.date].bundles.map((v, i) => {
                    return (
                        <div key={i} className="">
                            <p className='mt-[-3rem] mb-3 md:text-2xl text-1xl bg-gradient-to-r box-decoration-clone from-indigo-600 to-pink-500 text-gray-200 p-3 pl-5 rounded-xl w-full md:w-full'>Nhấn để đặt vé ngay</p>
                            <p className='inline-flex my-2 p-3 bg-indigo-600 text-white text-lg font-bold rounded-xl'>
                                {`${v.caption === "voice" ? "Lồng tiếng" : "Phụ đề"} - ${v.version.toUpperCase()} `}
                            </p>
                            <div className='flex flex-row flex-wrap items-center justify-start'>
                                {Show ? <div className='flex flex-1 justify-center items-center'><Login Show={Show} setShow={setShow} /></div> :

                                    v.sessions.map((v, i) => {
                                        return (
                                            <div key={i} id={`${v.sessionId}-${v.cinemaId}`} className="text-center bg-gray-400 m-1 p-2 rounded-full hover:bg-gray-300 focus:bg-gray-300 hover:outline-1 border-pink-500 border-2" onClick={handleClick}>
                                                {v.showTime}
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    )
                })}
            </div> : ""}
        </>
    )
}

export default function Body({ data, info }) {
    const session = useSelector(s => s.session)
    const [Data, setData] = useState(null)
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 768px)").matches
    )
    useEffect(() => {
        if (!data.apiData) return setData(null)
        else {
            setData(data.apiData[info.type].find(e => e.id === info.id));
        }
    }, [Data, info, data])
    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);
    return (
        <>
            <div className=' md:container md:mx-auto mt-5 mx-2 md:mt-0'>
                <div className='flex flex-1 md:flex-row flex-col'>
                    <div className='w-full md:w-1/2'>
                        <div className="md:text-2xl text-1xl font-bold md:font-normal bg-gradient-to-r box-decoration-clone from-indigo-600 to-pink-500 text-gray-200 p-3 pl-5 rounded-lg md:rounded-none md:rounded-l-xl w-full md:w-full"  >
                            {Data ? "Khởi chiếu: " + new Date(Data.startdate).toLocaleDateString() : ""}
                        </div>
                        <Ticket session={session} info={info} />


                    </div>
                    {Data ? Data.trailer ? <div className='w-full md:w-1/2 h-fit border-2 md:border-8 border-pink-500 md:rounded-b-xl md:rounded-tr-xl relative ' style={matches ? { paddingTop: "28.125%" } : { paddingTop: "56.25%" }}>
                        <Youtube url={Data.trailer} width="100%" height="100%" className="absolute top-0 left-0" />
                    </div>
                        : <div className='w-full md:w-1/2 h-fit border-8 border-pink-500 rounded-b-xl rounded-tr-xl'>
                            <img className="w-full" src={`https://www.galaxycine.vn${Data.imageLandscape}`} alt="" />
                        </div>
                        : ""}
                </div>
                <div className='mx-2 mt-4 p-2 border-x-4 text-justify md:text-start border-pink-500/50 text-white'>

                    {Data && <p className='text-xl font-bold font-mono text-white'>Nội dung</p>}
                    {Data &&
                        decode(Data.description).replace(/(\r\n|\n|\r)/gm, "")?.match(/<p.*?>(.*?)<\/p>/g)?.map((v, i) => {
                            v = v.replace(/(<([^>]+)>)/g, "")
                            return v.length > 5 ? (
                                <div before=" - " className="before:content-[attr(before)] indent-8 p-2" key={i}>
                                    {v}
                                </div>
                            ) : ""
                        })}
                </div>
            </div>
        </>
    )
}
