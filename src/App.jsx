import { useState } from 'react'
import '@mantine/core/styles.css';
import './App.css';
import jojoLogo from './assets/jojos-logo.png';
import { AppShell, Burger, Group, NavLink, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import HomeArea from './components/Home.jsx'
import PartsList from './components/PartsList.jsx'
import Stats from './components/Stats.jsx'
import PartView from './components/PartView.jsx'
import {Link, BrowserRouter, Routes, Route} from 'react-router-dom'
import {Toaster} from 'sonner'

function App() {
  const [opened, { toggle, close }] = useDisclosure();
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
          onClick={close}
        /> 
        <NavLink
          component={Link}
          to="/parts" 
          label="Parts" 
          onClick={close}
        /> 
        <NavLink
          component={Link}
          to="/stats" 
          label="Stats" 
          onClick={close}
        /> 
       
      </AppShell.Navbar>

      <AppShell.Main>
        <Routes>
          <Route path="/" element={<HomeArea/>}/>
          <Route path="/parts" element={<PartsList/>}/>
          <Route path="/parts/:id" element={<PartView/>}/>
          <Route path="/stats" element={<Stats/>}/>
          <Route path="/stats/parts/:id" element={<Stats/>}/>
        </Routes>
      </AppShell.Main>
    </AppShell>
    <Toaster/>
  </BrowserRouter>
  </>);
}

export default App
