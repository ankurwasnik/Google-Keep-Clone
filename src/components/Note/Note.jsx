import React , {useState} from "react";
import "./Note.css" ;

function Note(props){
    const [isDone,setIsDone] = useState(false);
    
    function handleDone(){
        setIsDone(prevdata => {
            return !prevdata ;
        });
    }

    return (
        <div className="note" onClick={handleDone} >
            <h4  style={{textDecoration : isDone?"line-through" : "none"} } className="note-title">{props.title} </h4>
        </div>
    )
}

export default Note ;
