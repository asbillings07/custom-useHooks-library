import React from 'react'
import { Card, CardGrid, Container, Header } from './Elements'
import { Toggle, Script, Theme, Mount, LocalStorage, Increment, Nav, Hover } from './components'
import './App.css'
import { Provider } from './state'
import Menu from './Menu'
import blue from './images/blue.png'
import purp from './images/purp.png'
import black from './images/black.png'
import green from './images/green.png'

function App() {
  return (
    <Provider>
      <div>
        <Header>
          <Menu />
          <h1>Header</h1>
        </Header>
        <Nav />
        <Container>
          <h2>Super Cool</h2>
          <Theme />
          <Toggle />
          <LocalStorage />
          <Inc />
          <Mount />
          <Cookie />
          <Hover />
          <Script />
          <CardGrid>
            <Card style={{ background: 'var(--purp)' }}>
              <h3>Some card</h3>
              <img src={purp} alt='' />
            </Card>
            <Card style={{ background: 'var(--blue)' }}>
              <h3>Some card</h3>
              <img src={blue} alt='' />
            </Card>
            <Card style={{ background: 'var(--black)' }}>
              <h3>Some card</h3>
              <img src={black} alt='' />
            </Card>
            <Card style={{ background: 'var(--green)' }}>
              <h3>Some card</h3>
              <img src={green} alt='' />
            </Card>
          </CardGrid>
        </Container>
      </div>
    </Provider>
  )
}

export default App
