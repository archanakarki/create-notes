import React, {useState} from 'react';
import Note from './components/Note'
import './App.css';

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  //To add new note to the array of notes
  const addNewNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content : newNote,
      date : new Date().toISOString(),
      important : Math.random() > 0.5,
      id : notes.length + 1,
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
    console.log("Notes", notes)
  }

  //Fetch the new note from the input button
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
    console.log("New notes", newNote)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important === true)
  console.log("Notes to show" , notesToShow)
  const rows = () => notesToShow.map(note =>
      <Note 
        key={note.id}
        note={note.content}
      />
    )

  return (
    <div className="App">
      <h1>Notes</h1>
      <p>
        <small>Type in the box, save, and use button to sort the list based on importance</small>
      </p>
      
      <div>
        <button onClick={()=> setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

    <ul>
      {rows()}
    </ul>
      
      <form onSubmit={addNewNote}>
          <div>
            <input type="text" value={newNote} onChange={handleNoteChange} placeholder="Text here" required/>
          </div>
          <button type="submit">Save</button>
      </form>

      <p>{newNote}</p>
    </div>
  );
}

export default App;
