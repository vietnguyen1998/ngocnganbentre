import React from 'react'
import { Box, Button, Input, Grid } from 'theme-ui'
import CardCart from '@components/CardCart'
import buildResponsiveVariant from '@components/utils/buildResponsiveVariant'
import { FaSearch } from 'react-icons/fa'
import { nodes } from '@components/Shopping/data'
import { useLocalStorageState } from '@components/utils'
import empty_cart_image from './empty-cart.png'

const variant = ['horizontal-md']
import { Card } from 'theme-ui'
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
    items,
    setItems,
    ...rest
  } = props

  const [carts, setCarts] = React.useState(null)
  const [totalPrices, setTotalPrices] = React.useState('')

  React.useEffect(() => {
    let _nodes = [...nodes]
    let _items = []
    items.map(x => {
      let _item = _nodes.filter(y => y.id == x.id)
      _item[0].count = x.count
      _items.push(_item[0])
    })
    setCarts(_items)
    let total = 0
    _items.map(x => (total += x.price * x.count))
    setTotalPrices(total)
  }, [items])

  function deleteItem(item) {
    let _items = [...items]
    let _carts = [...carts]
    let index = _items.map(e => e.id).indexOf(item.id)
    if (index > -1) {
      // only splice array when item is found
      _items.splice(index, 1) // 2nd parameter means remove one item only
      _carts.splice(index, 1) // 2nd parameter means remove one item only
      setItems(_items)
      setCarts(_carts)
      document.getElementById('numberOfProduct').innerHTML =
        _items.length.toString()
    }
  }

  function changeCountItem(e, item) {
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
        {carts && carts.length == 0 ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              style={{ width: 200, margin: '0 auto' }}
              src={empty_cart_image}
            ></img>
          </div>
        ) : null}
        {carts &&
          carts.map((node, index) => (
            <div style={{ marginBottom: 12 }}>
              <CardCart
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
        <p style={{ fontStyle: 'italic' }}>
          <span style={{ color: 'red' }}>* </span>Shop bao ship đơn hàng trên
          500.000đ
        </p>
        <Card>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 16px'
            }}
          >
            <p>Tổng cộng: </p>
            <p style={{ fontWeight: 'bold' }}>
              {totalPrices.toLocaleString('it-IT', {
                style: 'currency',
                currency: 'VND'
              })}
            </p>
          </div>
        </Card>
      </Box>
    </div>
  )
})

export default CartItemsShop
