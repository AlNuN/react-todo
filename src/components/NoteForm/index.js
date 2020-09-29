import React, { Component } from 'react';
import './style.css'

export default class NoteForm extends Component{

  constructor(props){
    super(props);

    this.state = {categories:[]};

    this.title = '';
    this.text = '';
    this.category = 'Sem categoria';

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNoteChange = this.handleNoteChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.createNote = this.createNote.bind(this);
    this.newCategories = this.newCategories.bind(this);
  }

  newCategories(categories){
    this.setState({...this.state, categories});
  }

  componentDidMount() {
    this.props.categories.subscribe(this.newCategories);
  }

  componentWillUnmount() {
    this.props.categories.unsubscribe(this.newCategories);
  }

  handleTitleChange(event){
    event.stopPropagation();
    this.title = event.target.value;
  }

  handleNoteChange(event){
    event.stopPropagation();
    this.text = event.target.value;
  }

  handleCategoryChange(event){
    event.stopPropagation();
    this.category = event.target.value;
  }

  createNote(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.addNote(this.title, this.text, this.category);
  }

  render() {
    return (
      <form className="note-form"
        onSubmit={this.createNote}
      >
        <select 
          className="form-cadastro_input"
          onChange={this.handleCategoryChange}
        >
          <option>Sem Categoria</option>
          {this.state.categories.map((category, index) => {
            return (
              <option key={index}>{category}</option>
            )
          })}
        </select>
        <input 
          className="note-form_input" 
          type="text" 
          placeholder="Título" 
          onChange={this.handleTitleChange}
        />
        <textarea 
          className="note-form_input" 
          rows={15}
          placeholder="Escreva sua nota..." 
          onChange={this.handleNoteChange}
          />
        <button className="note-form_input note-form_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
