import requests from "../utils/requests"
import Thumbnail from "./Thumbnail"

function VideoCard({results}) {
    return (
        <div className='px-5 my-10 sm:grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3'>
           {results.map(result =>(
               <Thumbnail key={result.id} result={result}/>
           ))}
        </div>
    )
}

export default VideoCard
