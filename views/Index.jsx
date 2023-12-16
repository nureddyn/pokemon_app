import React from 'react'
import styles, { anchor, page, pageHeader, listElement } from './styles';
import Header from './Header';

export default function Index({ pokemons }) {
  return (
    <div style={page}>
      <Header />
      <h1 style={pageHeader}>Pokemon Page</h1>
      <ul>
        {pokemons.map((pokemon, i) => {
          return (
            <li style={listElement} key={i}>
              <p>
                <a style={anchor} href={`/pokemon/${i}`}>
                  {`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`}
                </a>
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
