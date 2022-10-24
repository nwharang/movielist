import { useEffect } from "react"

const currencyFomater = (number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
}

const Food = ({ data, Order, setOrder }) => {
    const handlerUpdate = (e) => {
        if (e.target.value === "0") {
            setOrder((current) => {
                let a = { ...current }
                if (a.order.consession.findIndex(data => data.type === e.target.name.split("-")[0]) >= 0)
                    a.order.consession.splice(a.order.consession.findIndex(data => data.type === e.target.name.split("-")[0]), 1)
                return a
            })
        }
        else
            setOrder((current) => {
                let a = { ...current }
                if (a.order.consession.findIndex(data => data.type === e.target.name.split("-")[0]) < 0) {
                    a.order.consession.push({
                        type: e.target.name.split("-")[0],
                        description: e.target.name.split("-")[1],
                        quantity: e.target.value,
                        price: e.target.name.split("-")[2],
                    })
                }
                else
                    a.order.consession[a.order.consession.findIndex(data => data.type === e.target.name.split("-")[0])].quantity = e.target.value
                return a
            })
    }
    useEffect(() => {
        if (Order.order.consession && Order.order.consession.length > 0)
            Order.order.consession.forEach(element => {
                try {
                    document.getElementById(element.description).value = element.quantity
                    console.log(document.getElementById(element.description).value);
                } catch (error) { }
            })
    })


    return (
        <form className="flex-1 flex flex-col gap-5 divide-y divide-slate-400/25 p-2 md:p-0" onChange={handlerUpdate}>
            {
                data.concessionItems.map((e, k) => {
                    return (
                        <div key={k} className="flex-1 p-1 flex flex-col flex-nowrap">
                            <div className="flex-1">
                                <label className="flex-1 items-center max-w-[66%] p-1 font-bold" htmlFor={e.name}>{e.description}</label>
                                <label className="flex-1 items-center max-w-[66%] p-1" htmlFor={e.name}>{e.extendedDescription}</label>
                            </div>
                            <div className="my-2 flex flex-1 items-center">
                                <label className="w-7/12" htmlFor="soluong">Số lượng</label>
                                {/* Default Value Here */}
                                <input className="w-2/12 p-2 rounded-xl" defaultValue={0} min={0} max={10} step={1} type="number" name={`${e.headOfficeItemCode}-${e.description}-${e.price}`} id={e.description} />
                                <label className="w-3/12 p-2 text-right  " htmlFor="soluong">{currencyFomater(e.price)}</label>
                            </div>
                        </div>
                    )
                })
            }
        </form>
    )
}
export default Food