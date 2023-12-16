import React from 'react';
import Header from './Header';
import { page, pageHeader } from './styles'; 
export default function Home() {
  return (
    <div style={page}>
      <Header />
      <h1 style={pageHeader}>Welcome to The Pokemon Page</h1>
    </div>
  )
}
