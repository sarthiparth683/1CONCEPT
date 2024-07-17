let URL = "http://localhost:8080/task";
const getData = async () => {
    return await axios.get(URL).then((res) => res.data).catch((err) => err);
}

const App = () => {
    const { useState } = React;
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState({});

    const handlegetData = () => {
        getData().then((res) => {
            console.log(res)
            setData(res);
        }).catch((err) => {
            console.log(err)
        });
    };

    const handleDelete = (id) => {
        axios.delete(`${URL}/${id}`).then((res) => {
            console.log(res);
            handlegetData();
        }).catch((err) => {
            console.log(err)
        });
    };

    const handleEdit = (el) => {
        setEdit(el)
    };

    return <>
        <button onClick={handlegetData} >Get Data</button>
        <div>
            {
                data.map((el) => {
                    return edit.id == el.id ? (
                        <TodoForm edit={edit} key={el.id} setEdit={setEdit} />
                    ) : (<TodoItem key={el.id} el={el} handleDelete={handleDelete} handleEdit={handleEdit} />)
                })
            }
        </div>
    </>
};

const TodoForm = ({ edit, setEdit }) => {
    // method - 2: can declare an new state and store the edit in it. 
    const handleChange = (e) => {
        const { name } = e.target;
        const value = e.target.type == "checkbox" ? e.target.checked : e.target.value;
        setEdit({
            ...edit,
            [name]: value
        })
    };
    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log(edit)
    };

    return <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} value={edit.title} />
        <input type="text" name="assignee" placeholder="Assignee" onChange={handleChange} value={edit.assignee} />
        <label> isCompleted:- <input type="checkbox" name="isCompleted" checked={edit.isCompleted} onChange={handleChange} /> </label>
        <button type="submit" >Submit</button>
    </form>
}

const TodoItem = ({ el, handleDelete, handleEdit }) => {
    return <div  >
        <span>
            {el.title} - <b>{el.assignee}</b> - {el.isCompleted}
        </span>
        <span>
            <button onClick={() => handleDelete(el.id)}>Delete</button>
            <button onClick={() => handleEdit(el)}>Edit</button>
        </span>
    </div>
}
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<App />);