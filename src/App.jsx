import { useState } from 'react'
import '@mantine/core/styles.css';
import './App.css';
import jojoLogo from './assets/jojos-logo.png';
import { AppShell, Burger, Group, NavLink, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import HomeArea from './components/Home.jsx'
import PartsList from './components/PartsList.jsx'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [opened, { toggle }] = useDisclosure();
  return (<>
  <BrowserRouter>
  <AppShell
      padding="md"
      header={{ height: 70 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <Image className="jojosLogo" src={jojoLogo}/>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar> 
        <NavLink
          component={Link}
          to="/" 
          label="Home" 
        /> 
        <NavLink
          component={Link}
          to="/parts" 
          label="Parts" 
        /> 
       
      </AppShell.Navbar>

      <AppShell.Main>
        <Routes>
          <Route path="/" element={<HomeArea/>}/>
          <Route path="/parts" element={<PartsList/>}/>
        </Routes>
      </AppShell.Main>
    </AppShell>
  </BrowserRouter>
  </>);
}

export default App
