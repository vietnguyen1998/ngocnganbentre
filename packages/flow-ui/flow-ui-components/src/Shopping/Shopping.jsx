import React from 'react'
import { Box, Button, Input, Grid } from 'theme-ui'
import Card from '@components/CardShop'
import buildResponsiveVariant from '@components/utils/buildResponsiveVariant'
import { nodes } from './data'
import { FaSearch } from 'react-icons/fa'
const variant = ['horizontal-md', 'vertical']
const cardListVariant = [
  'lists.cards.fixed.horizontal-md',
  'lists.cards.fixed.vertical'
]

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
    borderWidth: `md`,
  }),
}

const Shopping = React.forwardRef((props, ref) => {
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
    <Card
      key={node.id}
      variant={variant}
      // onMouseOver={() => changeSlide(index)}
      // onFocus={() => changeSlide(index)}
      //In sliders with fade effect apply loading to the first card only
      loading={false}
      columns={[1, 2, 3, 4]}
      omitCategory={true}
      {...node}
    />
  ))
  debugger
  return (
    <div>
      <Grid width={[400]} style={{ marginBottom: 24 }}>
        <Box bg='muted'>
          <Button variant='dark' sx={styles.button}>
            Cây Giống
          </Button>
          <Button variant='primary' sx={styles.button}>Hoa Kiểng</Button>
          <Button variant='dark' sx={styles.button}>Cây Trong Nhà</Button>
        </Box>
        <Box style={{position: "relative"}}>
          <FaSearch style={styles.searchIcon} />
          <Input
            sx={styles.input}
            type='text'
            placeholder='Nhập tên cây giống'
            aria-label='Search'
            autoFocus={true}
          />
        </Box>
      </Grid>
      <Box sx={{ variant: cardListVariant }}>{cards}</Box>
    </div>
  )
})

export default Shopping
