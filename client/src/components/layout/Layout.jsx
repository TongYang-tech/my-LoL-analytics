import NavHeaderBar from './navigation/NavHeaderBar'
import { Container } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <NavHeaderBar />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
