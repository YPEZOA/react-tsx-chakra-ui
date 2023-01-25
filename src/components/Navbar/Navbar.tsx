import React from 'react'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

export interface Link {
  path: string
  text: string
}

const NavLink: React.FC<Link> = ({ path, text }) => {
  const { pathname } = useLocation()
  const pathMatched = path === pathname ? '#38B2AC' : 'inherit'

  return (
    <Link
      style={{
        textDecoration: 'none',
        borderRadius: 5,
        backgroundColor: pathMatched,
        color: path === pathname ? '#000' : 'initial'
      }}
      p={2}
      as={RouterLink}
      to={path}
    >
      {text}
    </Link>
  )
}

const Navbar: React.FC = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Box
      style={{ backdropFilter: 'blur(10px)' }}
      as="nav"
      position="fixed"
      width="100%"
      zIndex={1}
      boxShadow="md"
      p={2}
      display="flex"
      justifyContent={{ base: 'flex-end', md: 'space-between' }}
    >
      <Flex display={{ base: 'none', md: 'flex', sm: 'none' }} gap={3} alignItems="center">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Image borderRadius="full" alt="Home" pr={5} src="" />
        </Link>
        <NavLink path="/about" text="Sobre mi" />
        <NavLink path="/projects" text="Proyectos" />
        <NavLink path="/contact" text="Contacto" />
      </Flex>
      <IconButton
        onClick={toggleColorMode}
        aria-label="Switch mode"
        colorScheme={useColorModeValue('blue', 'orange')}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      />
      <Box display={{ base: 'initial', md: 'none' }}>
        <Menu>
          <MenuButton
            ml={2}
            as={IconButton}
            aria-label="Links"
            icon={<HamburgerIcon />}
            variant={useColorModeValue('solid', 'outline')}
          />
          <MenuList>
            <MenuItem>Sobre mi</MenuItem>
            <MenuItem>Proyectos</MenuItem>
            <MenuItem>Contacto</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  )
}

export default Navbar
