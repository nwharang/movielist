
import Youtube from 'react-player/youtube'

const Iframe = ({ url, width, height }) => {
    return (
        <>
            <Youtube title='Trailer' url={url} width={width} height={height} className="absolute top-0 left-0"
            />
        </>
    )
}

export default Iframe