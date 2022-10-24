import { useSelector } from 'react-redux'
import useFetchHook from '../../hooks/useFetchHook'
import Child from './components'
export default function Home() {
    useFetchHook("https://www.galaxycine.vn/api/movie/showAndComming","data");
    const apiData = useSelector((s) => s.data);
    return (
        <>
            <Child data={apiData} />
        </>
    )
}

