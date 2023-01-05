import React from 'react'
import { Box, Card, Flex, Input } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'
import columnSizeMatcher from '@components/utils/columnSizeMatcher'
import Body from './Card.Body'
import Footer from './Card.Footer'
import Media from './Card.Media'
import { FaWindowClose } from 'react-icons/fa'
import { useLocalStorageState } from '@components/utils'

const styles = {
  card: {
    overflow: `hidden`,
    height: `full`
  },
  content: {
    alignItems: `stretch`,
    height: `full`
  }
}

const CardBase = ({ columns, onMouseOver, ...props }) => {
  const [items, setItems] = useLocalStorageState('items', [])
  function onClickRemove(item){
    debugger
    let _items = [...items]
    let index = _items.map(e => e.id).indexOf(item.id)
    if (index > -1) { // only splice array when item is found
      _items.splice(index, 1); // 2nd parameter means remove one item only
      setItems(_items)
    }
  }

  return (
    <Box
      className='blog_card'
      sx={columnSizeMatcher(columns)}
      styles={{ maxWidth: '500px' }}
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
    >
      <Card
        variant='interactive'
        sx={{
          ...styles.card,
          variant: rv(props.variant, 'card')
        }}
      >
        <Flex
          as='article'
          style={{ position: 'relative' }}
          sx={{
            ...styles.content,
            variant: rv(props.variant, 'content')
          }}
        >
          <div onClick={() => onClickRemove(props)} style={{ position: 'absolute', top: 8, right: 16, cursor: "pointer" }}>
            <FaWindowClose></FaWindowClose>
          </div>
          <Media {...props} />
          <Body {...props}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span>Số lượng</span>
              <Input
                type='number'
                id='contact-form-name'
                name='name'
                required
                defaultValue={props.count}
                style={{ width: 88, marginLeft: 8 }}
              />
            </div>
            <Footer {...props} />
          </Body>
        </Flex>
      </Card>
    </Box>
  )
}

export default CardBase
