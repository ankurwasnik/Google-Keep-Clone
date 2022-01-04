import React,{useState} from "react";
import "./AddNote.css" ;

function AddNote (props) {
    const [noteTitle,setNoteTitle] = useState("");

    function handleFormSubmit(event){
         
        props.onSubmit(noteTitle);
        setNoteTitle("");
        event.preventDefault() ;
    }

    function handleInputChange(event){
        const newNoteTitle = event.target.value ;
        setNoteTitle(newNoteTitle) ;
    }

    return (
        <div className="container">
            <form onSubmit={handleFormSubmit} className="form">
                <div >
                <input 
                onChange={handleInputChange} 
                type="text" placeholder="Add your note here" 
                value={noteTitle} 
                className="form-control"
                >
                </input>
                <button 
                className="btn">Add Note</button>
                </div>
                
            </form>
        </div>
    )
}

export default AddNote ;