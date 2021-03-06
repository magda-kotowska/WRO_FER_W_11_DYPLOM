import React from "react";

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className="list" key="item.key">
                <p>
               <input className="newTask"
               type="text" 
               id={item.key} 
               value={item.text} 
               onChange ={
                   (e) =>{props.setText(e.target.value, item.key)}
               }
               />
                <span className="material-icons" onClick={()=>props.deleteItem(item.key)}>delete</span>
                </p>
            </div>
        })
        return(
            <div>{listItems}</div>
        )
}
export default ListItems;