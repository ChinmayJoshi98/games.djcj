const handleSubmit = async (e, nav, userID, email, age, setError) => {
    e.preventDefault();
    let req = { userID, email, age };
    let response = await fetch('http://localhost:5000/users/', {
        method: 'POST',
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
 
export default handleSubmit;