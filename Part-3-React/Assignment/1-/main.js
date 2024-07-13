const user = [
    {id:1,name:"john",email:"johndo@gmail.com", address:"john123"},
    {id:2,name:"john",email:"johndo@gmail.com", address:"john123"},
    {id:3,name:"john",email:"johndo@gmail.com", address:"john123"},
    {id:4,name:"john",email:"johndo@gmail.com", address:"john123"},
    {id:5,name:"john",email:"johndo@gmail.com", address:"john123"},
    {id:6,name:"john",email:"johndo@gmail.com", address:"john123"}
];

const UserProfile = ({user})=>{
    return <div className="card" >
    <h4>{user.name}</h4>
    <p>{user.email}</p>
    <p></p>
    </div>
}
