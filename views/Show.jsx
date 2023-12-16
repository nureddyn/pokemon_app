import React from 'react';
import Header from './Header';
import { page, pageHeader, anchor, image } from './styles';

export default function Show({ pokemon }) {
  return (
    <div style={page}>
      <h1 style={pageHeader}>Gotta Catch 'Em All</h1>
      <h2>{`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`}</h2>
      <img style={image} src={`${pokemon.img}.${pokemon.type}`} alt={`${pokemon.name} image`} />
      <a style={anchor} href='/pokemon'>Back</a>
    </div>
  )
}
