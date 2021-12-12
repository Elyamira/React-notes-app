import React, { useState } from 'react';
const CreateNote = (props) => {
	const [noteContent, setNoteContent] = useState({
		title: '',
		content: '',
	});

	const handleNoteContent = (event) => {
		const { value, name } = event.target;
		setNoteContent((prevValue) => {
			if (name === 'title') {
				return {
					title: value,
					content: prevValue.content,
				};
			}
			if (name === 'content') {
				return {
					title: prevValue.title,
					content: value,
				};
			}
		});
	};
	const addNote = (event) => {
		event.preventDefault();
		if (noteContent.title.length > 0 || noteContent.content.length > 0) {
			props.onAdd(noteContent);
			setNoteContent({
				title: '',
				content: '',
			});
		}
		return;
	};
	return (
		<div>
			<form>
				<input
					placeholder='Enter Title'
					name='title'
					onChange={handleNoteContent}
					value={noteContent.title}
				/>
				<textarea
					placeholder="Enter note's text"
					onChange={handleNoteContent}
					name='content'
					value={noteContent.content}
					rows='3'
				/>
				<div className='button-container'>
					<button onClick={addNote}>+</button>
				</div>
			</form>
		</div>
	);
};
export default CreateNote;
