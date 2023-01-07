import React from 'react'
import { Box, Button } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'
import CardBodyCategory from './Card.Body.Category'
import CardBodyTitle from './Card.Body.Title'
import CardBodyExcerpt from './Card.Body.Excerpt'
import CardBodyPrice from './Card.Body.Price'
import { useLocalStorageState } from '@components/utils'
import { toast } from 'react-toastify';

const styles = {
  body: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    flex: 1
  }
}

const CardBody = ({ children, omitBody, ...props }) => {
  const { itemsStore, setItemsStore} = props
  function onClickAdd(item) {
    let _items = [...itemsStore]
    let _index = _items.map(e => e.id).indexOf(item.id)
    if (_index != -1) {
      _items[_index].count += 1
    } else {
      let _item = { id: item.id, count: 1 }
      _items.push(_item)
    }
    setItemsStore(_items)
    document.getElementById("numberOfProduct").innerHTML = _items.length.toString();
    toast.success("Thêm vào giỏ hàng thành công")
  }
  return (
    !omitBody && (
      <Box
        sx={{
          ...styles.body,
          variant: rv(props.variant, 'body')
        }}
      >
        <CardBodyCategory {...props} />
        <CardBodyTitle {...props} />
        <div
          style={{ padding: '0 12px', display: 'flex', alignContent: 'center' }}
        >
          <Button
            variant='primary'
            to='/'
            style={{ margin: 'auto' }}
            onClick={() => onClickAdd(props)}
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </Box>
    )
  )
}

export default CardBody
