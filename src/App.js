import React, {useState} from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  const addNewNote = (event) => {
    event.preventDefault();
    console.log('Button clicked', event.target)
    const noteObject = {
      content : newNote,
      date : new Date().toISOString(),
      important : Math.random() > 0.5,
      id : notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }


  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div className="App">
      <h1>App</h1>
      <form onSubmit={addNewNote}>
          <div>
            <input type="text" value={newNote} onChange={handleNoteChange} placeholder="Type here"/>
          </div>
          <button type="submit">Save</button>
      </form>

      <p>{newNote}</p>
    </div>
  );
}

export default App;
