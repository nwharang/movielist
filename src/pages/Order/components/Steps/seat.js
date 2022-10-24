import { useMemo, useState } from "react";

const Seat = ({ data, Order, setOrder }) => {
    const [Ticket, setTicket] = useState({ couple: 0, single: 0 })
    const validate = useMemo(() => {
        let couple = 0, single = 0;
        Order.order.ticket.forEach((e, k) => {
            if (e.type === "GHE DOI")
                couple += parseInt(e.quantity)
            else single += parseInt(e.quantity)
        })
        return {
            couple: couple,
            single: single
        }
    }, [Order]);
    const handlerUpdate = (e) => {
        e.preventDefault()
        const add = () => {
            if (e.target.dataset.row === "P") {
                if (Ticket.couple === validate.couple) return
                setTicket({ ...Ticket, couple: Ticket.couple + 1 })
            }
            else {
                if (Ticket.single === validate.single) return
                setTicket({ ...Ticket, single: Ticket.single + 1 })
            }
            e.target.dataset.set = "selected"
            e.target.style.background = "rgba(246,190,0, 0.7)"
            setOrder((current) => {
                let a = { ...current }
                if (a.order.seat.findIndex(data => data.column === e.target.textContent && data.row === e.target.dataset.row) < 0) {
                    a.order.seat.push({
                        column: e.target.textContent,
                        row: e.target.dataset.row
                    })
                }
                return a
            })
        }
        const sub = () => {
            if (e.target.dataset.row === "P") {
                if (Ticket.couple === 0) return
                setTicket({ ...Ticket, couple: Ticket.couple - 1 })
            }
            else {
                if (Ticket.single === 0) return
                setTicket({ ...Ticket, single: Ticket.single - 1 })
            }
            e.target.dataset.set = ""
            e.target.style.background = ""
            setOrder((current) => {
                let a = { ...current }
                if (a.order.seat.findIndex(data => data.column === e.target.textContent && data.row === e.target.dataset.row) >= 0) {
                    console.log("Subing");
                    a.order.seat.splice(a.order.seat.findIndex(data => data.column === e.target.textContent && data.row === e.target.dataset.row), 1)
                }
                return a
            })
        }
        if (!e.target.dataset.set || e.target.dataset.set.length < 0)
            add()
        else sub()
    }
    return (
        <form className="flex flex-1 flex-col justify-around items-center text-sm gap-1 font-mono overscroll-x-auto p-2 md:p-0" >
            <p className="mt-5">Màn hình</p>
            <div className="w-1/2 md:w-1/3 h-2 bg-black mb-5"></div>
            <div className="w-full overflow-auto">
                {data.seat.map((e, k) => {

                    return (
                        // row
                        <div key={"a" + k} className="w-full text-white font-bold">
                            <div className="flex flex-1 flex-row justify-between items-center gap-2 md:gap-0">
                                <div className="px-2 w-6 h-6 flex  justify-center items-center bg-gray-500 border  ">
                                    {e.row}
                                </div>
                                {
                                    // column
                                    e.seat[0].map((column, k) => {
                                        return (
                                            <div key={"b" + k}>
                                                {<button type="button" data-row={e.row} className={`flex w-6 h-6 justify-center items-center border ${column[0].status ? "bg-red-500/50 pointer-events-none" : "bg-green-500/50"}`} onClick={handlerUpdate}>
                                                    {column[0].column + 1}
                                                </button>}
                                            </div>
                                        )
                                    })
                                }
                                <p className="px-2 w-6 h-6 flex  justify-center items-center bg-gray-500 border ">
                                    {e.row}
                                </p>
                            </div>
                        </div>
                    )
                })}
                {data.coupleSeat.map((e, k) => {

                    return (
                        // row
                        <div key={"c" + k} className="w-full text-white font-bold">
                            <div className="flex flex-1 flex-row justify-between items-center gap-1 md:gap-0">
                                <p className="px-2 w-6 h-6 flex  justify-center items-center bg-gray-500 border ">
                                    {e.row}
                                </p>
                                {
                                    // column
                                    e.seat[0].map((column, k) => {
                                        return (
                                            <div key={"d" + k}>
                                                {<button type="submit" data-row={e.row} className={`flex w-11 md:w-12 h-6 justify-center items-center border ${column[0].status ? "bg-red-500/50 pointer-events-none" : "bg-green-500/50"}`} onClick={handlerUpdate}>
                                                    {column[0].column + 1}
                                                </button>}
                                            </div>
                                        )
                                    })
                                }
                                <p className="px-2 w-6 h-6 flex  justify-center items-center bg-gray-500 border ">
                                    {e.row}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex w-full flex-row justify-around">
                {validate.single - Ticket.single ? <p>Số ghế vé đơn còn lại : {validate.single - Ticket.single}</p> : ""}
                {validate.couple - Ticket.couple ? <p>Số ghế vé đôi còn lại : {validate.couple - Ticket.couple}</p> : ""}
            </div>
        </form >
    )
}
export default Seat