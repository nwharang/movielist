import { useEffect, useState } from "react"
import Ticket from './Steps/ticket'
import Food from './Steps/food'
import Seat from './Steps/seat'
import Total from './Steps/total'
import { useNavigate } from 'react-router-dom'
export default function Body({ data, info, film }) {
    const [isValidate, setIsValidate] = useState(false)
    const [State, setState] = useState(1);
    const [Order, setOrder] = useState({ film: film, info: info, order: { ticket: [], consession: [], seat: [] } });
    const navigate = useNavigate()
    return (

        <div className="container mx-auto pt-24 px-5 min-h-[100vh]">
            {/* Progess Bar */}
            {/* Progess Bar */}
            {
                data && <div className='flex flex-col md:flex-row gap-5 '>
                    {State < 4 && <div className="flex md:w-[70%] flex-col border border-blue-500/20 shadow-lg shadow-blue-500/20 bg-gray-200/80 rounded-2xl p-1 md:p-5">
                        <div className="min-h-[50vh]">
                            {State === 1 && <><Ticket data={data.ticket} Order={Order} setOrder={setOrder} /></>}
                            {State === 2 && <><Food data={data.consession} Order={Order} setOrder={setOrder} /></>}
                            {State === 3 && <><Seat data={data.seat} Order={Order} setOrder={setOrder} /></>}
                        </div>
                        <div className="relative w-fulljustify-center mt-5">
                            <div className="absolute flex bottom-0 left-0">
                                {State > 1 && <button className="px-4 py-3 font-bold text-white bg-blue-500/80 rounded-full" onClick={() => setState(State - 1)} type="button">Back</button>}
                            </div>
                            <div className="flex bottom-0 center justify-center ">
                                {State < 4 && <button className="px-4 py-3 font-bold text-white bg-blue-500/80 rounded-full" onClick={() => setState(State)} type="button">Reset</button>}
                            </div>
                            <div className="absolute flex bottom-0 right-0">
                                {State < 4 && <button className="px-4 py-3 font-bold text-white bg-blue-500/80 rounded-full" onClick={() => setState(State + 1)} type="button">{State < 4 ? "Next" : "Finish"}</button>}
                            </div>
                        </div>
                    </div>}
                    {/* Validate */}
                    {State === 4 && <Validate Order={Order} State={State} setState={setState} isValidate={isValidate} setIsValidate={setIsValidate} />}
                    < Total Order={Order} >
                        {isValidate && <>
                            <div className="absolute flex bottom-0 left-0">
                                {State === 4 && <button className="px-4 py-3 font-bold text-white bg-blue-500/80 rounded-full" onClick={() => setState(1)} type="button">Back</button>}
                            </div>
                            <div className="absolute flex bottom-0 right-0">
                                {State === 4 && <button className="px-4 py-3 font-bold text-white bg-blue-500/80 rounded-full" onClick={() => State < 4 ? setState(1) : navigate("/")} type="button">{State < 4 ? "Next" : "Finish"}</button>}
                            </div>
                        </>}
                    </Total>
                </div>
            }
        </div >
    )
}
const Validate = ({ Order, setState, isValidate, setIsValidate }) => {
    const [ErrorCode, setErrorCode] = useState(null)
    useEffect(() => {
        if (Order.order.ticket.length < 1) {
            setErrorCode(1)
            let Timer = setTimeout(() => {
                setState(1)
            }, 3000)
            return () => clearTimeout(Timer)
        }
        if (Order.order.seat.length < 1) {
            setErrorCode(2)
            let Timer = setTimeout(() => {
                setState(3)
            }, 3000)
            return () => clearTimeout(Timer)
        }
        setIsValidate(true)
    }, [setState, Order, setIsValidate])

    return !isValidate && (
        <div className="absolute bg-black/25 w-full h-full top-0 left-0">
            <div className="fixed md:w-1/2 w-3/4 h-1/2 top-1/4 left-[12.5%] md:left-1/4 bg-gray-200 border-2 border-red-500/30 rounded-xl flex flex-col p-3">
                {ErrorCode === 1 && <div className="flex flex-col flex-1 text-bold text-center md:text-xl justify-center items-center">
                    <p>You not select ticket yet</p>
                    <p>Directing you back to booking ticket</p>
                </div>}
                {ErrorCode === 2 && <div className="flex flex-col flex-1 text-bold text-center md:text-xl justify-center items-center">
                    <p>You not pick your seat yet</p>
                    <p>Directing you back to booking seat</p>
                </div>}
            </div>
        </div>
    )
}