import { useEffect } from "react"

const currencyFomater = (number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
}

const Ticket = ({ data, Order, setOrder }) => {
    const handlerUpdate = (e) => {
        if (e.target.value === "0") {
            setOrder((current) => {
                let a = { ...current }
                if (a.order.ticket.findIndex(data => data.type === e.target.name.split("-")[0]) >= 0)
                    a.order.ticket.splice(a.order.ticket.findIndex(data => data.type === e.target.name.split("-")[0]), 1)
                return a
            })
        }
        else
            setOrder((current) => {
                let a = { ...current }
                if (a.order.ticket.findIndex(data => data.type === e.target.name.split("-")[0]) < 0) {
                    a.order.ticket.push({
                        type: e.target.name.split("-")[0],
                        description: e.target.name.split("-")[1],
                        quantity: e.target.value,
                        price: e.target.name.split("-")[2]
                    })
                }
                else
                    a.order.ticket[a.order.ticket.findIndex(data => data.type === e.target.name.split("-")[0])].quantity = e.target.value
                return a
            })
    }
    useEffect(() => {
        if (Order.order.ticket && Order.order.ticket.length > 0)
            Order.order.ticket.forEach(element => {
                try {
                    document.getElementById(element.description).value = element.quantity
                } catch (error) { }
            })
    })
    return (
        <form className="flex-1 flex flex-col gap-5 divide-y divide-slate-400/25 p-2 md:p-0" onChange={handlerUpdate}>
            {
                data.map((e, k) => {
                    return (
                        <div key={k} className="flex-1 p-1 flex flex-col flex-nowrap">
                            <div className="flex-1">
                                <label className="flex-1 items-center max-w-[66%] p-1 font-bold" htmlFor={e.name}>{e.description}</label>
                            </div>
                            <div className="my-2 flex flex-1 items-center">
                                <label className="w-7/12" htmlFor="soluong">Số lượng</label>
                                <input className="w-2/12 p-2 rounded-xl" defaultValue={0} min={0} max={10} step={1} type="number" name={`${e.name}-${e.description}-${e.price}`} id={e.description} />
                                <label className="w-3/12 p-2 text-right  " htmlFor="soluong">{currencyFomater(e.price)}</label>
                            </div>
                        </div>
                    )
                })
            }
        </form>
    )
}
export default Ticket