import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const NavHeaderBar = () => {
  return (
    <Box className="nav-header-bar" as={Heading} size="lg" fontWeight="medium" backgroundColor={"gray.100"}>
      <Flex gap={6} justifyContent="center">
        <Link
          as={RouterLink}
          to="pokemon"
          variant="plain"
          _focus={
            {
              boxShaow: 'none',
              outline: 'none'
            }
          }
        >
          Pokemon
        </Link>
        <Link
          as={RouterLink}
          to="trading-card-game"
          variant="plain"
          _focus={
            {
              boxShadow: 'none',
              outline: 'none'
            }
          }
        >
          Trading Card Game
        </Link>
      </Flex>
    </Box>
  )
}

export default NavHeaderBar
