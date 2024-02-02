import { useState } from "react";
import handleSubmit from "../functions/handleSubmit";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [userID, setUserID] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState('');
    const nav = useNavigate();

    return ( 
        <div className="disp add">
            <h2>Add a User</h2>
            <form className="form" onSubmit={(e) => handleSubmit(e, nav, userID, email, age, setError)}>
                <p>Enter the User ID</p>
                <input type="text" 
                required
                name="userID"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}/>
                <p>Enter the Email ID</p>
                <input type="text" 
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <p>Enter the Age</p>
                <input type="number" 
                required
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}/>
                <button className="button">Add</button>
            </form>
            <p>{error}</p>
        </div>
     );
}
 
export default AddUser;