import { ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container pt={20}>
      <Box>{children}</Box>
    </Container>
  )
}
export default Layout
