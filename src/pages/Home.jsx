import React from 'react'
import styled from 'styled-components'
import Login from '../components/login/Login'

const Component = styled.div`
    flex: 11;
`

const Home = () => {
  return (
    <Component>
      <Login />
    </Component>
  )
}

export default Home
