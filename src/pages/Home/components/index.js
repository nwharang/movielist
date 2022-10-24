import Body from './body'
import Header from './header'
export default function App({ data }) {
    return (
        <>
            <Header />
            <Body data={data} />
        </>
    )
}