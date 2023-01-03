import React from 'react'
import { GatsbyImage as Img } from 'gatsby-plugin-image'
import { css } from 'theme-ui'
import rv from '@components/utils/buildResponsiveVariant'
import memphis from '../../assets/a1.jpg'

const CardMediaImage = ({ variant, loading, image, title }) => (
  // <img src={memphis} style={{objectFit: "cover", overflow: 'hidden', maxWidth: "100%", height: "100%"}}></img>
  <Img
    image={image}
    loading={loading}
    alt={title}
    css={css({
      height: `full`,
      verticalAlign: `middle`, //avoid baseline gap
      img: {
        bg: `omegaLighter`
      },
      variant: rv(variant, 'image')
    })}
  />
)
CardMediaImage.defaultProps = {
  loading: 'lazy'
}

export default CardMediaImage
