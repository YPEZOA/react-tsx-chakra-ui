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
      alignItems="center"
      justifyContent={{ base: 'space-between' }}
    >
      <Link href="/" marginLeft={{ base: 1, md: 10 }} display="flex" alignItems={'center'}>
        <Image src="assets/logo.png" w={8} alt="Logo ypezoadev" />
      </Link>
      <Flex display={{ base: 'none', md: 'flex', sm: 'none' }} gap={3} alignItems="center">
        <NavLink path="/about" text="Sobre mi" />
        <NavLink path="/projects" text="Proyectos" />
        <NavLink path="/contact" text="Contacto" />
      </Flex>
      <Box alignSelf="right">
        <IconButton
          onClick={toggleColorMode}
          aria-label="Switch mode"
          colorScheme={useColorModeValue('purple', 'orange')}
          variant="ghost"
          borderRadius={25}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        />
        <Box display={{ base: 'inline-block', md: 'none' }}>
          <Menu>
            <MenuButton
              ml={2}
              as={IconButton}
              aria-label="Links"
              icon={<HamburgerIcon />}
              variant={useColorModeValue('solid', 'outline')}
            />
            <MenuList display="flex" flexDirection="column">
              <RouterLink to="/about">
                <MenuItem>Sobre mí</MenuItem>
              </RouterLink>
              <RouterLink to="/projects">
                <MenuItem>Proyectos</MenuItem>
              </RouterLink>
              <RouterLink to="/contact">
                <MenuItem>Contacto</MenuItem>
              </RouterLink>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
