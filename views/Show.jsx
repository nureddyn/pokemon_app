import React from 'react'

export default function Show({ pokemon }) {
  return (
    <div>
      <h1>Gotta Catch 'Em All</h1>
      <h2>{`${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`}</h2>
      <img src={`${pokemon.img}.jpg`} alt={`${pokemon.name} image`} />
      <a href='/'>Back</a>
    </div>
  )
}
