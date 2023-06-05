import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Layout from '../../components/Layout/Layout'

const Main: React.FC = () => {
  return (
    <Layout>
      <Heading>Hola, soy Yusy Pezoa</Heading>
      <Text mt={2}>Desarrollador Frontend con más de 2 años de experiencia</Text>
    </Layout>
  )
}

export default Main

Main.displayName = 'Main'
