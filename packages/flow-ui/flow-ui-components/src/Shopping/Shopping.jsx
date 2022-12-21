import React from 'react'
import { Box } from 'theme-ui'
import CardListSlider from '../CardList/CardList.Slider'
import Card from '@components/Card'
import buildResponsiveVariant from '@components/utils/buildResponsiveVariant'

const nodes = [
  {
    id: 'd7bf08e6-60b5-59fb-ad8b-3e0f61344e87',
    title: '5 ingenious innovations triggered by chaos in startups',
    slug: '/5-ingenious-innovations-triggered-by-chaos-in-startups/',
    link: null,
    excerpt:
      'Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…',
    timeToRead: 1,
    featured: null,
    thumbnailText: null,
    date: 'April 02, 2020',
    category: {
      id: '03c518e5-420a-5145-8057-10c829faa5af',
      name: 'Innovation',
      slug: '/category/innovation/',
      color: '#fefcbf',
      icon: '/static/35c6c4f7d744541f08be2bbd2770c8db/innovation.svg'
    },
    author: null,
    thumbnail: {
      __typename: 'ImageSharp',
      ImageSharp_vertical: {
        layout: 'constrained',
        backgroundColor: '#787898',
        images: {
          fallback: {
            src: '/static/a381cbe123484c239b97a005d5ce4a00/144fe/image.jpg',
            srcSet:
              '/static/a381cbe123484c239b97a005d5ce4a00/9d7b9/image.jpg 190w,\n/static/a381cbe123484c239b97a005d5ce4a00/144fe/image.jpg 380w',
            sizes: '(min-width: 380px) 380px, 100vw'
          },
          sources: [
            {
              srcSet:
                '/static/a381cbe123484c239b97a005d5ce4a00/228d6/image.webp 190w,\n/static/a381cbe123484c239b97a005d5ce4a00/6b99c/image.webp 380w',
              type: 'image/webp',
              sizes: '(min-width: 380px) 380px, 100vw'
            }
          ]
        },
        width: 380,
        height: 290
      },
      ImageSharp_hero: {
        layout: 'constrained',
        backgroundColor: '#787898',
        images: {
          fallback: {
            src: '/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg',
            srcSet:
              '/static/a381cbe123484c239b97a005d5ce4a00/696c0/image.jpg 800w,\n/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg 1600w',
            sizes: '(min-width: 1600px) 1600px, 100vw'
          },
          sources: [
            {
              srcSet:
                '/static/a381cbe123484c239b97a005d5ce4a00/c9f06/image.webp 800w,\n/static/a381cbe123484c239b97a005d5ce4a00/f47df/image.webp 1600w',
              type: 'image/webp',
              sizes: '(min-width: 1600px) 1600px, 100vw'
            }
          ]
        },
        width: 1600,
        height: 650
      }
    }
  },
  {
    id: 'b912bb74-a8f9-528a-a186-1fd4b6581a8e',
    title: '50 social impact innovations that might save the world',
    slug: '/50-social-impact-innovations-that-might-save-the-world/',
    link: null,
    excerpt:
      'Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…',
    timeToRead: 1,
    featured: null,
    thumbnailText: null,
    date: 'April 02, 2020',
    category: {
      id: '03c518e5-420a-5145-8057-10c829faa5af',
      name: 'Innovation',
      slug: '/category/innovation/',
      color: '#fefcbf',
      icon: '/static/35c6c4f7d744541f08be2bbd2770c8db/innovation.svg'
    },
    author: null,
    thumbnail: {
      __typename: 'ImageSharp',
      ImageSharp_vertical: {
        layout: 'constrained',
        backgroundColor: '#787898',
        images: {
          fallback: {
            src: '/static/a381cbe123484c239b97a005d5ce4a00/144fe/image.jpg',
            srcSet:
              '/static/a381cbe123484c239b97a005d5ce4a00/9d7b9/image.jpg 190w,\n/static/a381cbe123484c239b97a005d5ce4a00/144fe/image.jpg 380w',
            sizes: '(min-width: 380px) 380px, 100vw'
          },
          sources: [
            {
              srcSet:
                '/static/a381cbe123484c239b97a005d5ce4a00/228d6/image.webp 190w,\n/static/a381cbe123484c239b97a005d5ce4a00/6b99c/image.webp 380w',
              type: 'image/webp',
              sizes: '(min-width: 380px) 380px, 100vw'
            }
          ]
        },
        width: 380,
        height: 290
      },
      ImageSharp_hero: {
        layout: 'constrained',
        backgroundColor: '#787898',
        images: {
          fallback: {
            src: '/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg',
            srcSet:
              '/static/a381cbe123484c239b97a005d5ce4a00/696c0/image.jpg 800w,\n/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg 1600w',
            sizes: '(min-width: 1600px) 1600px, 100vw'
          },
          sources: [
            {
              srcSet:
                '/static/a381cbe123484c239b97a005d5ce4a00/c9f06/image.webp 800w,\n/static/a381cbe123484c239b97a005d5ce4a00/f47df/image.webp 1600w',
              type: 'image/webp',
              sizes: '(min-width: 1600px) 1600px, 100vw'
            }
          ]
        },
        width: 1600,
        height: 650
      }
    }
  },
  {
    id: '6b3e6cc9-d434-542b-873f-9dbaffa8ad3c',
    title: 'Business Model pivots in the Low Touch Economy',
    slug: '/business-model-pivots-in-the-low-touch-economy/',
    link: null,
    excerpt:
      'Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…',
    timeToRead: 1,
    featured: true,
    thumbnailText: null,
    date: 'April 02, 2020',
    category: {
      id: '03c518e5-420a-5145-8057-10c829faa5af',
      name: 'Innovation',
      slug: '/category/innovation/',
      color: '#fefcbf',
      icon: '/static/35c6c4f7d744541f08be2bbd2770c8db/innovation.svg'
    },
    author: null,
    thumbnail: {
      __typename: 'ImageSharp',
      ImageSharp_vertical: {
        layout: 'constrained',
        backgroundColor: '#787898',
        images: {
          fallback: {
            src: '/static/a381cbe123484c239b97a005d5ce4a00/144fe/image.jpg',
            srcSet:
              '/static/a381cbe123484c239b97a005d5ce4a00/9d7b9/image.jpg 190w,\n/static/a381cbe123484c239b97a005d5ce4a00/144fe/image.jpg 380w',
            sizes: '(min-width: 380px) 380px, 100vw'
          },
          sources: [
            {
              srcSet:
                '/static/a381cbe123484c239b97a005d5ce4a00/228d6/image.webp 190w,\n/static/a381cbe123484c239b97a005d5ce4a00/6b99c/image.webp 380w',
              type: 'image/webp',
              sizes: '(min-width: 380px) 380px, 100vw'
            }
          ]
        },
        width: 380,
        height: 290
      },
      ImageSharp_hero: {
        layout: 'constrained',
        backgroundColor: '#787898',
        images: {
          fallback: {
            src: '/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg',
            srcSet:
              '/static/a381cbe123484c239b97a005d5ce4a00/696c0/image.jpg 800w,\n/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg 1600w',
            sizes: '(min-width: 1600px) 1600px, 100vw'
          },
          sources: [
            {
              srcSet:
                '/static/a381cbe123484c239b97a005d5ce4a00/c9f06/image.webp 800w,\n/static/a381cbe123484c239b97a005d5ce4a00/f47df/image.webp 1600w',
              type: 'image/webp',
              sizes: '(min-width: 1600px) 1600px, 100vw'
            }
          ]
        },
        width: 1600,
        height: 650
      }
    }
  },
  {
    id: '0c5278a6-6b16-5a94-970e-7d703a929449',
    title: 'Future-proof your organization with biomimicry thinking',
    slug: '/future-proof-your-organization-with-biomimicry-thinking/',
    link: null,
    excerpt:
      'Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…',
    timeToRead: 1,
    featured: null,
    thumbnailText: null,
    date: 'April 02, 2020',
    category: {
      id: '03c518e5-420a-5145-8057-10c829faa5af',
      name: 'Innovation',
      slug: '/category/innovation/',
      color: '#fefcbf',
      icon: '/static/35c6c4f7d744541f08be2bbd2770c8db/innovation.svg'
    },
    author: null,
    thumbnail: {
      __typename: 'ImageSharp',
      ImageSharp_vertical: {
        layout: 'constrained',
        backgroundColor: '#787898',
        images: {
          fallback: {
            src: '/static/a381cbe123484c239b97a005d5ce4a00/144fe/image.jpg',
            srcSet:
              '/static/a381cbe123484c239b97a005d5ce4a00/9d7b9/image.jpg 190w,\n/static/a381cbe123484c239b97a005d5ce4a00/144fe/image.jpg 380w',
            sizes: '(min-width: 380px) 380px, 100vw'
          },
          sources: [
            {
              srcSet:
                '/static/a381cbe123484c239b97a005d5ce4a00/228d6/image.webp 190w,\n/static/a381cbe123484c239b97a005d5ce4a00/6b99c/image.webp 380w',
              type: 'image/webp',
              sizes: '(min-width: 380px) 380px, 100vw'
            }
          ]
        },
        width: 380,
        height: 290
      },
      ImageSharp_hero: {
        layout: 'constrained',
        backgroundColor: '#787898',
        images: {
          fallback: {
            src: '/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg',
            srcSet:
              '/static/a381cbe123484c239b97a005d5ce4a00/696c0/image.jpg 800w,\n/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg 1600w',
            sizes: '(min-width: 1600px) 1600px, 100vw'
          },
          sources: [
            {
              srcSet:
                '/static/a381cbe123484c239b97a005d5ce4a00/c9f06/image.webp 800w,\n/static/a381cbe123484c239b97a005d5ce4a00/f47df/image.webp 1600w',
              type: 'image/webp',
              sizes: '(min-width: 1600px) 1600px, 100vw'
            }
          ]
        },
        width: 1600,
        height: 650
      }
    }
  },
  {
    id: 'afffbc06-4dfc-523d-9c9f-d47064baba1b',
    title: 'Can a designer sustainably transform the world?',
    slug: '/can-a-designer-sustainably-transform-the-world/',
    link: null,
    excerpt:
      'Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…',
    timeToRead: 1,
    featured: null,
    thumbnailText: null,
    date: 'April 02, 2020',
    category: {
      id: '03c518e5-420a-5145-8057-10c829faa5af',
      name: 'Innovation',
      slug: '/category/innovation/',
      color: '#fefcbf',
      icon: '/static/35c6c4f7d744541f08be2bbd2770c8db/innovation.svg'
    },
    author: null,
    thumbnail: {
      __typename: 'ImageSharp',
      ImageSharp_vertical: {
        layout: 'constrained',
        backgroundColor: '#787898',
        images: {
          fallback: {
            src: '/static/a381cbe123484c239b97a005d5ce4a00/144fe/image.jpg',
            srcSet:
              '/static/a381cbe123484c239b97a005d5ce4a00/9d7b9/image.jpg 190w,\n/static/a381cbe123484c239b97a005d5ce4a00/144fe/image.jpg 380w',
            sizes: '(min-width: 380px) 380px, 100vw'
          },
          sources: [
            {
              srcSet:
                '/static/a381cbe123484c239b97a005d5ce4a00/228d6/image.webp 190w,\n/static/a381cbe123484c239b97a005d5ce4a00/6b99c/image.webp 380w',
              type: 'image/webp',
              sizes: '(min-width: 380px) 380px, 100vw'
            }
          ]
        },
        width: 380,
        height: 290
      },
      ImageSharp_hero: {
        layout: 'constrained',
        backgroundColor: '#787898',
        images: {
          fallback: {
            src: '/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg',
            srcSet:
              '/static/a381cbe123484c239b97a005d5ce4a00/696c0/image.jpg 800w,\n/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg 1600w',
            sizes: '(min-width: 1600px) 1600px, 100vw'
          },
          sources: [
            {
              srcSet:
                '/static/a381cbe123484c239b97a005d5ce4a00/c9f06/image.webp 800w,\n/static/a381cbe123484c239b97a005d5ce4a00/f47df/image.webp 1600w',
              type: 'image/webp',
              sizes: '(min-width: 1600px) 1600px, 100vw'
            }
          ]
        },
        width: 1600,
        height: 650
      }
    }
  },
  {
    id: '30d2382d-0e57-59ce-ae5e-7ba23c593a7e',
    title: 'Create an international team of innovation catalysts in 5 steps',
    slug: '/create-an-international-team-of-innovation-catalysts-in-5-steps/',
    link: null,
    excerpt:
      'Primo in altis pelle alumnae Lorem markdownum obvius in seque opus, est bicorni forte; laeva…',
    timeToRead: 1,
    featured: true,
    thumbnailText: null,
    date: 'April 02, 2020',
    category: {
      id: '03c518e5-420a-5145-8057-10c829faa5af',
      name: 'Innovation',
      slug: '/category/innovation/',
      color: '#fefcbf',
      icon: '/static/35c6c4f7d744541f08be2bbd2770c8db/innovation.svg'
    },
    author: null,
    thumbnail: {
      __typename: 'ImageSharp',
      ImageSharp_vertical: {
        layout: 'constrained',
        backgroundColor: '#787898',
        images: {
          fallback: {
            src: '/static/a381cbe123484c239b97a005d5ce4a00/144fe/image.jpg',
            srcSet:
              '/static/a381cbe123484c239b97a005d5ce4a00/9d7b9/image.jpg 190w,\n/static/a381cbe123484c239b97a005d5ce4a00/144fe/image.jpg 380w',
            sizes: '(min-width: 380px) 380px, 100vw'
          },
          sources: [
            {
              srcSet:
                '/static/a381cbe123484c239b97a005d5ce4a00/228d6/image.webp 190w,\n/static/a381cbe123484c239b97a005d5ce4a00/6b99c/image.webp 380w',
              type: 'image/webp',
              sizes: '(min-width: 380px) 380px, 100vw'
            }
          ]
        },
        width: 380,
        height: 290
      },
      ImageSharp_hero: {
        layout: 'constrained',
        backgroundColor: '#787898',
        images: {
          fallback: {
            src: '/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg',
            srcSet:
              '/static/a381cbe123484c239b97a005d5ce4a00/696c0/image.jpg 800w,\n/static/a381cbe123484c239b97a005d5ce4a00/5e493/image.jpg 1600w',
            sizes: '(min-width: 1600px) 1600px, 100vw'
          },
          sources: [
            {
              srcSet:
                '/static/a381cbe123484c239b97a005d5ce4a00/c9f06/image.webp 800w,\n/static/a381cbe123484c239b97a005d5ce4a00/f47df/image.webp 1600w',
              type: 'image/webp',
              sizes: '(min-width: 1600px) 1600px, 100vw'
            }
          ]
        },
        width: 1600,
        height: 650
      }
    }
  }
]

const variant = 'horizontal-cover'
const SLIDER_VARIANT_GROUP = 'lists.cards.slider'
const FIXED_VARIANT_GROUP = 'lists.cards.fixed'
const slider = true
const fade = true
const cardListVariant = buildResponsiveVariant(
  slider ? SLIDER_VARIANT_GROUP : FIXED_VARIANT_GROUP,
  variant
)

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
    // <Card
    //   key={node.id}
    //   variant={variant}
    //   onMouseOver={() => changeSlide(index)}
    //   onFocus={() => changeSlide(index)}
    //   //In sliders with fade effect apply loading to the first card only
    //   loading={fade ? (index === 0 ? loading : undefined) : loading}
    //   {...node}
    // />
    <div>
      pp
    </div>
  ))

  return (
    <Box sx={{ variant: cardListVariant }}>
      {slider ? (
        <CardListSlider
          ref={ref}
          // beforeChange={index => changeSlide(index)}
          columns={[1, 2, 3, 3]}
          omitCategory={true}
        >
          {cards}
        </CardListSlider>
      ) : (
        cards
      )}
    </Box>
  )
})

//Cards List (Fixed or Slider)

export default Shopping
