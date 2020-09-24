import React, { Component } from 'react';
import NoteCard from './NoteCard';

export default class NoteList extends Component {

  render() {
    return (
      <ul>
        <li>
          <NoteCard />
        </li>
      </ul>
    );
  }
}