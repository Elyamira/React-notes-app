import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';
// import notes from '../notes';
import CreateNote from './CreateNote';

const App = () => {
	const [notes, updateNotes] = useState([]);
	const submitNote = (note) => {
		updateNotes((prevNotes) => {
			return [...prevNotes, note];
		});
	};
	const deleteNote = (id) => {
		console.log(id);
		const filteredNotes = notes.filter((filteredNote, index) => id !== index);
		console.log(filteredNotes);
		return updateNotes(filteredNotes);
	};
	return (
		<div>
			<Header />
			<CreateNote onAdd={submitNote} />

			{notes.map((note, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={note.title}
						content={note.content}
						onDelete={deleteNote}
					/>
				);
			})}
			<Footer />
		</div>
	);
};
export default App;
