import React from 'react'
import { Box } from 'theme-ui'
import CardListSlider from '../CardList/CardList.Slider'
import Card from '@components/Card'
import buildResponsiveVariant from '@components/utils/buildResponsiveVariant'
import { nodes } from './data'

const variant = ['horizontal-md', 'vertical']
const cardListVariant = [
  'lists.cards.fixed.horizontal-md',
  'lists.cards.fixed.vertical'
]

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
      columns={[1, 2, 3, 3]}
      omitCategory={true}
      {...node}
    />
  ))
  debugger
  return (
    <div>
      <div className='mb-8 mt-8'>xxx</div>
      <Box sx={{ variant: cardListVariant }}>{cards}</Box>
    </div>
  )
})

//Cards List (Fixed or Slider)

export default Shopping
