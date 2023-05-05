import { useEffect, useState } from "react";

export const Question2 = () => {

  interface Note {
    id: number,
    content: string
  }
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  
  function handleDelete(id: number) {
    const removeItem = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(removeItem);
  }

  return (
    <section className="question">
      <h2>Question 2</h2>
      <div className="question-content">
        <strong>Instructions</strong>
        <div className="question-instructions">
         You are going to build me a simple note taking application that does the following
          <ol>
            <li>Gives me an input where I can type my note</li>
            <li>Gives me a save button</li>
            <li>When the save button is pressed the following should happen:
              <ol type="a">
                <li>
                  The text I typed into the input field gets cleared out.
                </li>
                <li>
                  The note I typed gets displayed in a list of notes on the screen
                </li>
              </ol>
            </li>
            <li>
              On each note, there should be a button that allows me to delete the note from the list.
            </li>
          </ol>
          Ensure that you are correctly following unidirectional dataflow.
        </div>
        <hr />
        <div className="solution-section">
          <div>
            <input
            type="text"
            value={note}
            onChange= {e => setNote(e.target.value)}>
            </input>
            <button onClick={() => {               
              setNotes([...notes,
              {
                id: notes.length + 1,
                content: note
              }]);
              setNote("");
            }}>Save
            </button>
            {notes.map((note) => {
              return (
                <div>
                  <p key={note.id}>{note.content}</p>
                  <button
                  onClick={() => handleDelete(note.id)}>
                  Delete
                  </button>
                </div>
              )})}
      
          </div>
        </div>
      </div>
    </section>
  )
}