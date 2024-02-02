const handleGameSubmit = async (e, nav, gameID, name, price, ownerID, setError) => {
    e.preventDefault();
    let req = { gameID, name, price, ownerID };
    let response = await fetch('http://localhost:5000/games/', {
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
 
export default handleGameSubmit;