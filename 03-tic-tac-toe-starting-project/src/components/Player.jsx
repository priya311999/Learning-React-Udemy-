import { useState} from "react";

export default function Player({initialName, symbol, isActive}) {
const [playerName, setPlayerName] = useState(initialName);
const [isEditing, setIsEditing]=useState(false);

function editHandler(){
    // setIsEditing(!isEditing)  Not a best practice because it will always takes the default value which will get change rather than the current value
     setIsEditing(editing=> !editing); //Always call a function to change the current value based on the previous value
} 

function handleChange(event){
    setPlayerName(event.target.value);
}

let editablePlayerName = <span className="player-name">{playerName}</span>
// let btnCaption = 'Edit'


if(isEditing){
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
    // btnCaption="Save"
} 

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName} 
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editHandler}>{isEditing ? "Save":"Edit"}</button>
    </li>
  );
}
