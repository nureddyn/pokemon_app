import React from 'react'
import styles, { anchor, index, indexHeader } from './styles';

export default function Index({ pokemons }) {
  return (
    <div style={index}>
      <h1 style={indexHeader}>Pokemon Page</h1>
      <ul>
        {pokemons.map((pokemon, i) => {
          return (
            <li key={i}>
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
