const UserDetails = ({ users, uID }) => {
    let user;
    for ( let i of users){
        if(i._id === uID){
            user = i;
        }
    }
    return ( 
        <div className="userDetails">
            <h3>User ID</h3>
            <p>{user.userID}</p>
            <h3>User Email</h3>
            <p>{user.email}</p>
            <h3>User Age</h3>
            <p>{user.age}</p>
        </div>
     );
}
 
export default UserDetails;