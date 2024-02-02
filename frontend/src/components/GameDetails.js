const GameDetails = ({ games, gID }) => {
    let game;
    for ( let i of games){
        if(i._id === gID){
            game = i;
        }
    }
    return ( 
        <div className="userDetails">
            <h3>Game ID</h3>
            <p>{game.gameID}</p>
            <h3>Game Name</h3>
            <p>{game.name}</p>
            <h3>Game Price</h3>
            <p>{game.price}</p>
            <h3>Game Owner ID</h3>
            <p>{game.ownerID}</p>
        </div>
     );
}
 
export default GameDetails;