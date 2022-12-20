import React from 'react'
import { Box, IconButton, css, useColorMode, Link } from 'theme-ui'
import Switch from 'rc-switch'
import 'rc-switch/assets/index.css'
import { FaShoppingBag } from 'react-icons/fa'
const styles = {
  switch: {
    display: [`none`, null, `block`],
    // Switch Body
    '&.rc-switch': {
      background: `linear-gradient(45deg, #FF7D6B, #FFD64C)`,
      border: 0,
      width: 50,
      height: 24,
      '&:focus': {
        boxShadow: `none`
      }
    },
    '&.rc-switch-checked': {
      background: `linear-gradient(45deg, #3366FF, #AC15B8)`,
      border: 0
    },
    // Switch Handle
    '&.rc-switch:after': {
      size: `21px`
    },
    '&.rc-switch-checked:after': {
      left: `auto`,
      right: `2px`
    },
    // Switch Icons
    '.rc-switch-inner': {
      fontSize: `unset`,
      top: `1px`,
      left: `26px`
    },
    '&.rc-switch-checked .rc-switch-inner': {
      left: `7px`
    }
  },
  icon: {
    verticalAlign: `middle`
  },
  //Mobile
  mobileTrigger: {
    display: [`block`, null, `none`]
  }
}

export const CartShopping = () => {
  const handleChange = () => {}

  const label = `Toggle dark mode`

  return (
    <Box>
      <Link href='/cart'>
        <IconButton aria-label={label} onClick={handleChange}>
          <FaShoppingBag />
        </IconButton>
      </Link>
    </Box>
  )
}
