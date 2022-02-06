import React from "react";
import { Button } from "../Button/Button";
import EditableInput from "../EditableInput/EditableInput";
import RowContainer from "../RowContainer/RowContainer";
import "./orderRow.css";

interface ObjectMapper {
  [key: string]: number;
}


export default class OrderRow extends React.Component<{
  data: Array<ObjectMapper>;
  row: JSX.Element;
  handleRemoveClick: (index: number) => void
  handleAddClick: () => void
  handleInputChange: (e: any, name: any, index: number) => void
  // i: number;
}> {
  state = {
    // items: [
    //    {id:1, name: "🍰 Cake" },
    //   { id:2,name: "🍩 Donut" },
    //   { id:3,name: "🍎 Apple" },
    //   { id:4,name: "🍕 Pizza" },
    //   { id:5,name: " Meat" },
    // ] 
    items: this.props.data 
  };
    //  {id:1, name: "🍰 Cake" },
    //   { id:2,name: "🍩 Donut" },
    //   { id:3,name: "🍎 Apple" },
    //   { id:4,name: "🍕 Pizza" },
    //   { id:5,name: " Meat" },
    
     componentDidUpdate(){
       if(this.props.data !== this.state.items){
         this.setState({items: this.props.data})
       }
     }

  draggedItem: any = "";

  onDragStart = (e: any,index:any) => {
    this.draggedItem = this.state.items[index];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOver = (e: any,index:any) => {
    e.preventDefault();
    const draggedOverItem = this.state.items[index];

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = this.state.items.filter((item) => item !== this.draggedItem);

    // add the dragged item after the dragged over item
    items.splice(index, 0, this.draggedItem);

    // this.setState({ items });
    this.setState(prev => ({...prev,items:items}));
  };

  onDragEnd = () => {
    this.draggedItem = null;
  };

  render() {
    return (
      <div className="App">
        <main>
          <h3>List of items</h3>
          <ul onDragOver={(e) => e.preventDefault}>
            {
            this.state.items.map((item,index) => (
              <>
              <li key={index+1} onDragOver={(e) => this.onDragOver(e,index)}>
                <div
                  className="drag"
                  draggable
                  onDragStart={(e) => this.onDragStart(e,index)}
                  onDragEnd={this.onDragEnd}
                >{"🎶"}
                  HH
                </div>
                {/* <div className="content">{item.name} hello</div> */}
                {/* <span className="content">{item.valueX}</span> */}
                <RowContainer handleAddClick={this.props.handleAddClick} handleRemoveClick={this.props.handleRemoveClick} handleInputChange={this.props.handleInputChange} categoriesList={this.props.data} item={item} index={index}/>
              </li>
               {this.state.items.length - 1 === index && (
                <Button onClick={this.props.handleAddClick} title={"Add Row"} />
                  )}
              </>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}
