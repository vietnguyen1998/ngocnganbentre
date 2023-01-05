import React, { useContext } from 'react'
import { Container, Box, Flex } from 'theme-ui'
import pageContextProvider from '@helpers/pageContextProvider'
import Search from '@widgets/Search'
import { HeaderLogo } from './Header.Logo'
import { HeaderMenu } from './Header.Menu'
import { HeaderColorMode } from './Header.ColorMode'
import { CartShopping } from './Header.CartShopping'
import { useLocalStorageState } from '@components/utils'

const styles = {
  wrapper: {
    position: `relative`,
    bg: `headerBg`
  },
  container: {
    position: `relative`,
    zIndex: 10
  },
  logoContainer: {
    flexBasis: [`full`, null, `1/3`]
  },
  searchContainer: {
    flexBasis: [`auto`, null, `1/3`],
    minWidth: `auto`,
    order: [3, null, `unset`],
    mx: 3
  },
  menuContainer: {
    flexBasis: [`auto`, null, `1/3`],
    minWidth: `auto`,
    order: [4, null, `unset`]
  },
  colorModeContainer: {
    minWidth: `auto`,
    order: [2, null, `unset`]
  }
}

export const Header = ({ children }) => {
  const context = useContext(pageContextProvider)
  const [items, setItems] = useLocalStorageState('items', [])

  const { services, mobileMenu, darkMode } = context.pageContext

  const algolia = services && services.algolia
  return (
    <Box sx={styles.wrapper}>
      <Container variant='compact' sx={styles.container}>
        <Flex variant='layout.header'>
          <Box sx={styles.logoContainer}>
            <HeaderLogo />
          </Box>
          <Box sx={styles.searchContainer}>{<Search />}</Box>
          <Box sx={styles.menuContainer}>
            <HeaderMenu mobileMenu={mobileMenu} />
          </Box>
          {/* <Box sx={styles.colorModeContainer}>
            {darkMode && <HeaderColorMode />}
          </Box> */}
          <Box sx={styles.colorModeContainer} style={{ position: 'relative' }}>
            <CartShopping />
            <div
              style={{
                position: 'absolute',
                top: -6,
                right: -6,
                background: '#F7452E',
                width: 20,
                height: 20,
                textAlign: 'center',
                color: '#ffffff',
                borderRadius: 15,
                lineHeight: 1.5,
                fontSize: 12
              }}
            >
              {items.length}
            </div>
          </Box>
        </Flex>
      </Container>
      {children}
    </Box>
  )
}
