import React from 'react'
import { Box, Button, Input, Grid } from 'theme-ui'
import Card from '@components/CardCart'
import buildResponsiveVariant from '@components/utils/buildResponsiveVariant'
import { FaSearch } from 'react-icons/fa'
import { nodes } from '@components/Shopping/data'
import { useLocalStorageState } from '@components/utils'
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

const CartItemsShop = React.forwardRef((props, ref) => {
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

  const [carts, setCarts] = React.useState(null)
  const [items, setItems] = useLocalStorageState('items', [])

  React.useEffect(() => {
    let _nodes = [...nodes]
    let _items = []
    items.map(x => {
      let _item = _nodes.filter(y => y.id == x.id)
      _item[0].count = x.count
      _items.push(_item[0])
    })
    setCarts(_items)
    
  }, [items])

  function deleteItem(item){
    let _items = [...items]
    let _carts = [...carts]
    let index = _items.map(e => e.id).indexOf(item.id)
    if (index > -1) {
      // only splice array when item is found
      _items.splice(index, 1) // 2nd parameter means remove one item only
      _carts.splice(index, 1) // 2nd parameter means remove one item only
      setItems(_items)
      setCarts(_carts)
      document.getElementById("numberOfProduct").innerHTML = _items.length.toString();
    }
  }

  function changeCountItem(e, item){
    let value = e.target.value
    let _items = [...items]
    let _carts = [...carts]
    let index = _items.map(e => e.id).indexOf(item.id)
    if (index > -1) {
      _items[index].count = value
      _carts[index].count = value
      setItems(_items)
      setCarts(_carts)
    }
  }

  return (
    <div>
      <Box>
        {carts && carts.map((node, index) => (
          <div style={{ marginBottom: 12 }}>
            <Card
              key={node.id}
              variant={variant}
              // onMouseOver={() => changeSlide(index)}
              // onFocus={() => changeSlide(index)}
              //In sliders with fade effect apply loading to the first card only
              loading={false}
              deleteItem={deleteItem}
              changeCountItem={changeCountItem}
              omitCategory={true}
              styles={{ marginBottom: 12 }}
              {...node}
            />
          </div>
        ))}
      </Box>
    </div>
  )
})

export default CartItemsShop
