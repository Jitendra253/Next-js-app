
async function userList(){
    let data = await fetch("https://dummyjson.com/users");
    data =await data.json();
    return data.users;
}
export default async function User(){
    let users = await userList();
    console.log(users)
    return(
        <div>
            <h1>User Name List</h1>
            {
                users.map(user=>(
                    <div key={user.id}>
                        <h2>User Name:{user.firstName}</h2>
                    </div>
                ))
            }
        </div>
    )
}