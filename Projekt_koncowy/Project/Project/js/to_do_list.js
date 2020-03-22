import React from "react";
import ListItems from './list_items';

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setText = this.setText.bind(this);
    }

    handleInput(e) {
        this.setState({
            currentItem:{
                text: e.target.value,
                key:Date.now()
            }
        })
    }
    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text!=="" ){
            const newItems=[...this.state.items, newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }
    deleteItem(key){
        const filteredItems = this.state.items.filter(item =>
            item.key!==key);
            this.setState({
                items:filteredItems
            })
    }
    setText(text, key) {
        const items = this.state.items;
        items.map(item =>{
            if(item.key===key){
                item.text=text
            }
        })
        this.setState({
            items: items
        })
    }
    render () {
        return (
            <div>
            <div className="header">
                <form id= "to-do-form" onSubmit={this.addItem}>
                    <input type= "text" placeholder="Enter Your Task ..."
                    value={this.state.currentItem.text}
                    onChange={this.handleInput}/>
                    <button type= "submit">Add</button>
                </form>
            </div>

            <div className = "newList">
            <ListItems items = {this.state.items}
            deleteItem={this.deleteItem}
            setText = {this.setText}
            />
            </div>
            </div>
        )
    }
}

export default ToDoList;