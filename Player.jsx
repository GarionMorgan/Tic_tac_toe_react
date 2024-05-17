import { useState } from 'react';

export default function Player({initialName, symbol, isActive, onChangeName }) {
	//change the state of the player name
	const [ playerName, setPlayerName ] = useState(initialName);
	//change the state of the editing button
	const [ isEditing, setIsEditing ] = useState(false);
	//function that is called when user clicks on button
	function handleEdit() {
		setIsEditing((editing) => !editing);
		if(isEditing){
			onChangeName(symbol, playerName);
		}
	}
	//function that is called when user changes player name
	function handleChange(event) {
		setPlayerName(event.target.value);
	}
	//shows playername 
	let editablePlayerName = <span className="player-name">{playerName}</span>;
	//opens up a text box if user clicks on edit button
	if(isEditing) {
		editablePlayerName = (
			<input type="text" required value={playerName} onChange={handleChange} />
		);
	}


	return(
		<li className={isActive ? 'active' : undefined }>
		<span className="player">
			{editablePlayerName}
			<span className="player-symbol">{symbol}</span>
		</span>
		<button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
		</li>
	)
}