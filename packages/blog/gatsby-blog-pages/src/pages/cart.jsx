import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import CartItems from '@components/CartItemsShop'
import AuthorExpanded from '@widgets/AuthorExpanded'
import { useBlogAuthors } from '@helpers-blog'
import Booking from '@widgets/Booking'
import ContactInfo from '@widgets/ContactInfo'
import Commitment from '@widgets/Commitment'
import { Grid, Box } from 'theme-ui'
const PageAuthors = props => {
  const authors = useBlogAuthors()
  
  return (
    <Layout {...props}>
      <Seo title='Our Team' />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <PageTitle header='Giỏ hàng' subheader='' />
      </Stack>
      <Stack>
        <Main>
          <Grid width={[400, 'auto']} gap={4}>
            <Box bg='primary'>
              <CartItems />
              <Divider />
            </Box>
            <Box bg='muted'>
              <Booking />
            </Box>
          </Grid>
        </Main>
      </Stack>
    </Layout>
  )
}

export default PageAuthors
