import { useEffect, useState } from 'react';
import genGames from '../functions/genGames';
import { useNavigate } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import GameDetails from '../components/GameDetails';

const Home = () => {
    const [users, setUsers] = useState('');
    const [games, setGames] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [userSelected, setUserSelected] = useState(false);
    const [gameSelected, setGameSelected] = useState(false);
    const [userId, setUserId] = useState('def');
    const [gameId, setGameId] = useState('def');
    const nav = useNavigate();

    useEffect(() => {
      const fetchUsers = async () => {
        let response = await fetch('http://localhost:5000/users/');
        let json = await response.json();
        if(response.ok){
            setUsers(json);
            setIsLoading(false);
        }
        else{
            console.log("Response not received");
        }
      }
      
      fetchUsers();

      return () => {
        console.log("Cleanup function run");
      }
    }, [])

    const delEnable = (e) => {
        setGameSelected(true);
    }

    const handleDeleteGame = async (gameId) => {
        let response = await fetch('http://localhost:5000/games/' + gameId, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        let json = await response.json();
        if(response.ok){
            let temp = games.filter((item, index) => {return item._id !== gameId});
            console.log(temp);
            if(temp.length === 0){
                setGames('');
                console.log(games);
            }
            console.log(json);
            setGames(temp);
            setGameId('def');
            setGameSelected(false);
        }
    }

    const handleDeleteUser = async (userId) => {
        let actualID;
        for(let i of users){
            if(i._id === userId){
                actualID = i.userID;
            }
        }
        let resp = await fetch('http://localhost:5000/games/gameById/' + actualID, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });
        let jsonResp = await resp.json();
        console.log(jsonResp);
        if(resp.ok && jsonResp.deletedCount !== 0){
            let temp = games.filter((item, index) => {return item._id !== gameId});
            setGames(temp);
            console.log(jsonResp);
        }
        let delUrl = 'http://localhost:5000/users/' + userId;
        console.log(delUrl);
        let response = await fetch(delUrl, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        let json = await response.json();
        if(response.ok){
            let temp = users.filter((item, index) => {return item._id !== userId});
            console.log(json);
            setUsers(temp);
            setUserId('def');
            setUserSelected(false);
        }
    }

    const handleUpdateGame = (id) => {
        nav(`/updateGame/${id}`);
    }

    const handleUpdateUser = (id) => {
        nav(`/updateUser/${id}`);
    }

    return ( 
        <div className="content">
            <div className="disp">
                <h2>Pick a User to view their Games!</h2>
                {isLoading && <h1>Loading...</h1>}
                {!isLoading && <select className="dropdown" value={userId} onChange={(e) => {genGames(e, setUserSelected, users, setGames);setUserId(e.target.value);}}>
                    <option value="def" disabled>Select a User</option>
                    {users && users.map((item, index) => {
                        return <option key={item._id} value={item._id}>{item.userID}</option>
                    })}
                </select>}
                {userSelected && <UserDetails users={users} uID={userId}/>}
                <div className="buttons">
                    {userSelected && <button onClick={() => handleDeleteUser(userId)} className='button' style={{'height': '40px', 'width': 'auto', 'padding': '10px', 'marginTop': 'none'}}>Remove User</button>}
                    {userSelected && <button onClick={() => handleUpdateUser(userId)} className='button' style={{'height': '40px', 'width': 'auto', 'padding': '10px', 'marginTop': 'none'}}>Update User</button>}
                </div>
                {userSelected && games && <select className='dropdown' onChange={(e) => {delEnable(e); setGameId(e.target.value);}} id='gameDropDown' value = {gameId}>
                        <option value="def" disabled>Select a Game</option>
                        {games && games.map((item, index) => {
                            return <option key={item._id} value={item._id}>{item.name}</option>
                        })}
                    </select>}
                {userSelected && gameSelected && <GameDetails games={games} gID={gameId}/>}
                <div className="buttons">
                    {gameSelected && games && <button onClick={() => handleDeleteGame(gameId)} className='button' style={{'height': '40px', 'width': 'auto', 'padding': '10px', 'marginTop': 'none'}}>Remove Game</button>}
                    {gameSelected && games && <button onClick={() => handleUpdateGame(gameId)} className='button' style={{'height': '40px', 'width': 'auto', 'padding': '10px', 'marginTop': 'none'}}>Update Game</button>}
                </div>
                
            </div>
        </div>
        
     );
}
 
export default Home;