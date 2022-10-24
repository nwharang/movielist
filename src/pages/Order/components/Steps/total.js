import { useEffect, useState } from "react"

const currencyFomater = (number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
}
const Total = ({ Order, setOrder, children }) => {
    const [TotalPrice, setTotalPrice] = useState(0)
    useEffect(() => {
        setTotalPrice(() => {
            let all = 0;
            Order.order.ticket.forEach(e => {
                all += parseInt(e.price) * parseInt(e.quantity)
            })
            Order.order.consession.forEach(e => {
                all += parseInt(e.price) * parseInt(e.quantity)
            })
            return all
        })
    }, [Order])

    return (
        <div className="flex-1 border border-blue-500/20 shadow-lg shadow-blue-500/20 bg-gray-200/80 rounded-2xl p-5">
            <div className="flex h-full flex-col divide-y divide-slate-400/25">
                {Order.order.ticket && Order.order.ticket.map((e, i) => {
                    return (
                        <div key={i} className="flex flex-1 justify-between items-center p-2">
                            <p className="font-bold w-4/6">{e.description}</p>
                            <p className="w-1/6 text-center">{e.quantity}</p>
                            <p className="w-2/6 text-right">{currencyFomater(parseInt(e.price) * parseInt(e.quantity))}</p>
                        </div>
                    )
                })}
                {Order.order.consession && Order.order.consession.map((e, i) => {
                    return (
                        <div key={i} className="flex flex-1 justify-between items-center p-2">
                            <p className="font-bold w-4/6">{e.description}</p>
                            <p className="w-1/6 text-center">{e.quantity}</p>
                            <p className="w-2/6 text-right">{currencyFomater(parseInt(e.price) * parseInt(e.quantity))}</p>
                        </div>
                    )
                })}
                <div className="h-full flex justify-between items-end font-bold ">
                    <div className="flex flex-1 justify-between border-t border-slate-500/50 p-2">
                        <p>Total</p>
                        <p>{currencyFomater(TotalPrice)}</p>
                    </div>
                </div>
                <div className="relative p-8">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default Total