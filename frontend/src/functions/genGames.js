const genGames = async (e, setUserSelected, users, setGames) => {
    setUserSelected(true);
    let uID = e.target.value;
    let actualID;
    for(let i of users){
        if(i._id === uID){
            actualID = i.userID;
        }
    }
    let response = await fetch('http://localhost:5000/games/gameById/' + actualID);
    let json = await response.json();
    if(response.ok){
        setGames(json);
    }
    else{
        setGames('');
        console.log("err in fetching games");
    }
}

export default genGames;