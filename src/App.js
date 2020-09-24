import React, { Component } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

export default class App extends Component {
  render() {
    return (
      <>
      <NoteForm />
      <NoteList />
      </>
    );
  }
}
