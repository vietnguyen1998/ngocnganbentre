import React from 'react'
import { Box, Button } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'
import CardBodyCategory from './Card.Body.Category'
import CardBodyTitle from './Card.Body.Title'
import CardBodyExcerpt from './Card.Body.Excerpt'
import CardBodyPrice from './Card.Body.Price'

const styles = {
  body: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    flex: 1
  }
}

const CardBody = ({ children, omitBody, ...props }) =>
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
        <Button variant='primary' to='/' style={{ margin: 'auto' }}>
          Thêm vào giỏ hàng
        </Button>
      </div>
    </Box>
  )

export default CardBody
