import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateGame = () => {
    const [gameID, setGameID] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [ownerID, setOwnerID] = useState('');
    const [error, setError] = useState('');
    const nav = useNavigate();
    const { id } = useParams();
    
    const handleGameUpdate = async (e, nav, gameID, name, price, ownerID, setError) => {
        e.preventDefault();
        console.log(id);
        let req = {};
        if (gameID) req.gameID = gameID;
        if (name) req.name = name;
        if (price) req.price = price;
        if (ownerID) req.ownerID = ownerID;
        let response = await fetch('http://localhost:5000/games/' + id, {
            method: 'PATCH',
            body: JSON.stringify(req),
            headers: {'Content-Type': 'application/json'}
        })
        let json = await response.json();
        if(response.ok){
            nav('/');
            console.log(json);
        }
        else{
            setError(json);
        }
    }

    return ( 
        <div className="disp add">
            <h2>Update a Game</h2>
            <form className="form" onSubmit={(e) => handleGameUpdate(e, nav, gameID, name, price, ownerID, setError)}>
                <p>Enter the new Game ID</p>
                <input type="text" 
                
                name="gameID"
                value={gameID}
                onChange={(e) => setGameID(e.target.value)}/>
                <p>Enter the new Name</p>
                <input type="text" 
                
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
                <p>Enter the new Price</p>
                <input type="number" 
                
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}/>
                <p>Enter the new Owner ID</p>
                <input type="number" 
                
                name="ownerID"
                value={ownerID}
                onChange={(e) => setOwnerID(e.target.value)}/>
                <button className="button">Update</button>
            </form>
            <p>{error}</p>
        </div>
     );
}
 
export default UpdateGame;