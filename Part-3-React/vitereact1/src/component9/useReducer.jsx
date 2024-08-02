import React, {useReducer} from 'react'

const reducer = (state, action)=>{
    if (action == "add") {
        state = state +1
    }
};
 
const handleAdd = ()=>{
    dispatch 
}
const handleDel = ()=>{
    
}

const FetchData = ()=>{
    const [state, dispatch] =useReducer(reducer, 0);
    return (
        <div>
            FetchData
            <button  onClick={handleAdd}></button>
            <button onClick={handleDel} ></button>
        </div>
    )
}
export default FetchData