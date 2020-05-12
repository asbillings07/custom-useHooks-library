import React from 'react'
import { Card, CardGrid, Container, Header } from './Elements'
import { Toggle } from './components/Toggle'
import Cookie from './components/Cookie'
import Script from './components/Script'
import Mount from './components/Mount'
import LocalStorage from './components/LocalStorage'
import Inc from './components/increment'
import Nav from './components/Nav'
import Hover from './components/Hover'
import './App.css'
import { Provider } from './state'
import Menu from './Menu'
import blue from './blue.png'
import purp from './purp.png'
import black from './black.png'
import green from './green.png'

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
