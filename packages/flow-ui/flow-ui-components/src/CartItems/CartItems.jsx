import React from 'react'
import { Box, Button, Input, Grid } from 'theme-ui'
import Card from '@components/CardShop'
import buildResponsiveVariant from '@components/utils/buildResponsiveVariant'
import { nodes } from './data'
import { FaSearch } from 'react-icons/fa'
const variant = ['horizontal-md']

const styles = {
  button: {
    mx: 2,
    minWidth: 120
  },
  input: {
    ml: 1,
    pl: '40px'
  },
  searchIcon: {
    flexShrink: 0,
    position: `absolute`,
    top: 14,
    left: 20
  },
  form: ({ focus }) => ({
    display: 'flex',
    alignItems: `center`,
    bg: `omegaLight`,
    borderRadius: `default`,
    width: `300px`,
    maxWidth: `none`,
    borderStyle: `solid`,
    borderColor: focus ? `omegaLight` : `headerBg`,
    borderWidth: `md`
  })
}

const CartItems = React.forwardRef((props, ref) => {
  const {
    title,
    withTitleLink,
    limit,
    skip,
    distinct,
    aside,
    asNavFor,
    loading,
    ...rest
  } = props

  const cards = nodes.map((node, index) => (
    <div style={{ marginBottom: 12 }}>
      <Card
        key={node.id}
        variant={variant}
        // onMouseOver={() => changeSlide(index)}
        // onFocus={() => changeSlide(index)}
        //In sliders with fade effect apply loading to the first card only
        loading={false}
        omitCategory={true}
        styles={{ marginBottom: 12 }}
        {...node}
      />
    </div>
  ))
  return (
    <div>
      <Box>{cards}</Box>
    </div>
  )
})

export default CartItems
