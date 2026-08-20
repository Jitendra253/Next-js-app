import getUsers from "../../../../services/getUsers"
export default async function Page(props){
    const getUserList = getUsers();
    const users = await getUserList;
    const currentId = await props.params;
    const userDetails = users[currentId.userId-1]
    return(
        <div>
            <h3>User Deails Page</h3>
            <h4>Name:{userDetails.name}</h4>
            <h4>Email:{userDetails.email}</h4>
            <h4>Address:{userDetails.address.street}</h4>
            <h4>Phone:{userDetails.phone}</h4>
        </div>
    )
}

//function name should be exact same can't change the name
export async function generateStaticParams(){
    const getUserList = getUsers();
    const users = await getUserList;
    return users.map(user=>({
        userId:user.id.toString()
    }))
}