import React , {useState} from "react";
import Footer from "./components/Footer/Footer";
import Heading from './components/Heading/Heading';
import Note from "./components/Note/Note";
import AddNote from "./components/AddNote/AddNote";
// import TemplateNotes from "./notes" ;

function App () {
    const [NoteList,setNoteList] = useState([]) ;

    function handleNoteAdd(newNoteTitle){
        setNoteList(prevdata=>{
            return [...prevdata,newNoteTitle]
        })
        console.log(NoteList);
    }

    return (
         <div className="container">
             <Heading />
             <AddNote 
                 onSubmit={handleNoteAdd}      
             />
             {NoteList.map( (noteItem,noteIndex)=>
              (<Note key={noteIndex} id={noteIndex} title={noteItem} desc=""  /> )
             )}
             <Footer /> 
         </div>
    )
}

export default App;