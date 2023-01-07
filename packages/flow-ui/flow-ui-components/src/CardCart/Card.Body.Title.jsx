import React from 'react'
import { Link as GLink } from 'gatsby'
import { Heading } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'

const CardBodyTitle = ({ variant, title, slug, link, price }) => {
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
    <div {...linkProps} sx={{ variant: rv(variant, 'title') }} style={{height: 68, fontSize: 16, marginRight: 8}}>
      {title} <button style={{borderWidth: 0, borderRadius: 2, padding: "4px", fontWeight: "bold",color: "#545454"}}>{price && parseInt(price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</button>
    </div>
  )
}

export default CardBodyTitle
