import { useState } from "react";
import handleGameSubmit from "../functions/handleGameSubmit";
import { useNavigate } from "react-router-dom";

const AddGame = () => {
    const [gameID, setGameID] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [ownerID, setOwnerID] = useState('');
    const [error, setError] = useState('');
    const nav = useNavigate();

    return ( 
        <div className="disp add">
            <h2>Add a Game</h2>
            <form className="form" onSubmit={(e) => handleGameSubmit(e, nav, gameID, name, price, ownerID, setError)}>
                <p>Enter the Game ID</p>
                <input type="text" 
                required
                name="gameID"
                value={gameID}
                onChange={(e) => setGameID(e.target.value)}/>
                <p>Enter the Name</p>
                <input type="text" 
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
                <p>Enter the Price</p>
                <input type="number" 
                required
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}/>
                <p>Enter the Owner ID</p>
                <input type="number" 
                required
                name="ownerID"
                value={ownerID}
                onChange={(e) => setOwnerID(e.target.value)}/>
                <button className="button">Add</button>
            </form>
            <p>{error}</p>
        </div>
     );
}
 
export default AddGame;