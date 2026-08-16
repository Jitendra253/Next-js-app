import Link from "next/link";

export default function StudentList(){
    const studentLists = [
        {
            name:'Jitendra',
            id:'jitendra'
        },
        {
            name:"Peter",
            id:"peter",
        },
        {
            name:"Anil",
            id:"anil"
        },
        {
            name:"Rakesh",
            id:"rakesh"
        }
    ]
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                {
                    studentLists.map((student)=>(
                        <li key={student.id}>
                            <Link href={`/studentlist/${student.id}`}>{student.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}