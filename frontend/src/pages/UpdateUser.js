import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
    const [userID, setUserID] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState('');
    const nav = useNavigate();
    const { id } = useParams();
    
    const handleUserUpdate = async (e, nav, userID, email, age, setError) => {
        e.preventDefault();
        console.log(id);
        let req = {};
        if (userID) req.userID = userID;
        if (email) req.email = email;
        if (age) req.age = age;
        let response = await fetch('http://localhost:5000/users/' + id, {
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
            <h2>Update a User</h2>
            <form className="form" onSubmit={(e) => handleUserUpdate(e, nav, userID, email, age, setError)}>
                <p>Enter the new User ID</p>
                <input type="text" 
                name="userID"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}/>
                <p>Enter the new Email</p>
                <input type="text"   
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
                <p>Enter the new Age</p>
                <input type="number" 
                name="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}/>
                <button className="button">Update</button>
            </form>
            <p>{error}</p>
        </div>
     );
}
 
export default UpdateUser;