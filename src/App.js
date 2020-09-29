import React, { Component } from 'react';
import NoteForm from './components/NoteForm/';
import CategoryList from './components/CategoryList/'
import NoteList from './components/NoteList/';
import './assets/index.css';
import './assets/App.css';
import Categories from './data/Categories';
import NotesArray from './data/Notes';

export default class App extends Component {
  constructor() {
    super();
    this.categories = new Categories();
    this.notes = new NotesArray();

    this.categories.addCategory = this.categories.addCategory.bind(this.categories);
    this.notes.addNote = this.notes.addNote.bind(this.notes);
    this.notes.deleteNote = this.notes.deleteNote.bind(this.notes);
  }

  render() {
    return (
      <section className="conteudo">
        <NoteForm 
          addNote={this.notes.addNote} 
          categories={this.categories}
        />
        <main className="conteudo-principal">
        <CategoryList 
          categories={this.categories}
          addCategory={this.categories.addCategory}
        />
        <NoteList 
          notes={this.notes} 
          deleteNote={this.notes.deleteNote}
        />
        </main>
      </section>
    );
  }
}
