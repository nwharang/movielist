import Body from './body'
import Header from './header'
export default function App({ data, info }) {
    return (
        <>
            <Header data={data} info={info} />
            <Body data={data} info={info} />
        </>
    )
}