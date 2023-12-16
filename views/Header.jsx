import React from 'react'
import styles from './styles.js';

export default function Header() {
  return (
    <div style={styles.header}>
      <div><a style={styles.anchor} href='/'>Home</a></div>
      <div><a style={styles.anchor} href='/pokemon'>Pokemons</a></div>
      <div><a style={styles.anchor} href='/new'>New Pokemon</a></div>
    </div>
  )
}
