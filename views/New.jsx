import React from 'react';
import Header from './Header';
import { page } from './styles';

export default function New() {
  return (
    <div style={page}>
    <Header />
    <h1>New Pokemon</h1>
    <form action="/new" method='POST'>
      Name: <input type="text" name="name" />
      URL: <input type="text" name="img" />
      Image Type: <input type="text" name="type"/>
      <input type="submit"/>
    </form>
  </div>
  )
}
