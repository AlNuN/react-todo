import React, { Component } from 'react';
import NoteForm from './components/NoteForm/';
import CategoryList from './components/CategoryList/'
import NoteList from './components/NoteList/';
import './assets/index.css';
import './assets/App.css';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      notes: [],
      categories: [],
    };

    this.createNote = this.createNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.addCategory = this.addCategory.bind(this);
  }

  createNote(note, title, category) {
    this.setState({notes: [
      ...this.state.notes, { title, note, category }]
    });
  }

  deleteNote(index) {
    let newNotes = this.state.notes;
    newNotes.splice(index,1);
    this.setState({notes: newNotes})
  }

  addCategory(categoryName){
    this.setState({categories: [
      ...this.state.categories, categoryName
    ]})
  }

  render() {
    return (
      <section className="conteudo">
        <NoteForm 
          createNote={this.createNote} 
          categories={this.state.categories}
        />
        <main className="conteudo-principal">
        <CategoryList 
          categories={this.state.categories}
          addCategory={this.addCategory}
        />
        <NoteList 
          notes={this.state.notes} 
          deleteNote={this.deleteNote}
          categories={this.props.categories}
        />
        </main>
      </section>
    );
  }
}
