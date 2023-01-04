import React from 'react'
import { Box, Button, Input, Grid } from 'theme-ui'
import Card from '@components/CardShop'
import buildResponsiveVariant from '@components/utils/buildResponsiveVariant'
import { CATEGORIES, nodes } from './data'
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
    borderWidth: `md`
  })
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
  const [carts, setCarts] = React.useState(nodes)
  const [valueSearch, setValueSearch] = React.useState("")
  const [selected, setSelected] = React.useState(0)

  React.useEffect(() => {
    let new_data = nodes.filter((x)=>x.category == selected)
    setCarts(new_data.length == 0 ? nodes : new_data)
  }, [selected])

  function onClickSearch(){
    let new_data = nodes.filter((x)=> x.title.toLowerCase().includes(valueSearch.toLowerCase()))
    setCarts(new_data.length == 0 ? nodes : new_data)
  }

  return (
    <div>
      <Grid width={[400]} style={{ marginBottom: 24 }}>
        <Box bg='muted'>
        <Button
            variant={selected == 0 ? 'primary' : 'dark'}
            sx={styles.button}
            style={{minWidth: 20}}
            onClick={() => setSelected(0)}
          >
            All
          </Button>
          <Button
            variant={selected == CATEGORIES.CAY_GIONG ? 'primary' : 'dark'}
            sx={styles.button}
            onClick={() => setSelected(CATEGORIES.CAY_GIONG)}
          >
            Cây Giống
          </Button>
          <Button
            variant={selected == CATEGORIES.HOA_KIENG ? 'primary' : 'dark'}
            sx={styles.button}
            onClick={() => setSelected(CATEGORIES.HOA_KIENG)}
          >
            Hoa Kiểng
          </Button>
          <Button
            variant={selected == CATEGORIES.MAI_VANG ? 'primary' : 'dark'}
            sx={styles.button}
            onClick={() => setSelected(CATEGORIES.MAI_VANG)}
          >
            Mai Vàng
          </Button>
        </Box>
        <Box style={{ position: 'relative' }}>
          <FaSearch style={styles.searchIcon} onClick={onClickSearch}/>
          <Input
            value={valueSearch}
            onChange={(e) => setValueSearch(e.target.value)}
            sx={styles.input}
            type='text'
            placeholder='Nhập tên cây giống'
            aria-label='Search'
            autoFocus={true}
          />
        </Box>
      </Grid>
      <Box sx={{ variant: cardListVariant }}>
        {carts &&
          carts.map((node, index) => (
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
          ))}
      </Box>
    </div>
  )
})

export default Shopping
