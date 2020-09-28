import React, { Component } from 'react';
import './style.css';

export default class CategoryList extends Component{

  constructor() {
    super();

    this.handlerInputEvent = this.handlerInputEvent.bind(this);
  }

  handlerInputEvent(e) {
    if(e.key === "Enter"){
      const inputValue = e.target.value;
      this.props.addCategory(inputValue);
    } 
  }

  render(){
    return(
      <section className="category-list">
        <ul className="category-list_list">
          {this.props.categories.map((category, index)=> {
            return (
              <li 
                className="category-list_item"
                key={index}
              >
                {category}
              </li>
            );
          })}
        </ul>
        <input 
          className="category-list_input" 
          type="text" 
          placeholder="Adicionar Categoria"
          onKeyUp={this.handlerInputEvent}
        />
      </section>
    )
  }
}