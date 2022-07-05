import React from "react";
import {useParams, useNavigate} from 'react-router-dom'
import YouTube from "react-youtube";




const Trailer = ({data}) => {
    const {id} = useParams() ; 
    const navigation = useNavigate() ; 
    const movie = data.find((movie)=>movie.id === +id )
   
    return (
        <>
        <YouTube style={{marginLeft:'650px'}} videoId={movie.trailer} />;
        <button style={{marginLeft :'940px',width:'70px'}} onClick={()=>navigation(-1) }>Go Back </button>
        </>

    )
}


export default Trailer ;