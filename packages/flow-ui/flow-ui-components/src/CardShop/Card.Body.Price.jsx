import React from 'react'
import { Link as GLink } from 'gatsby'
import { Heading } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'

const CardBodyPrice = ({ variant, title, slug, link, price }) => {
  const linkProps = link
    ? {
        as: 'a',
        href: link,
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    : {
        as: GLink,
        to: slug
      }
  return (
    <Heading {...linkProps} sx={{ variant: rv(variant, 'title') }}>
      {price}
    </Heading>
  )
}

export default CardBodyPrice
