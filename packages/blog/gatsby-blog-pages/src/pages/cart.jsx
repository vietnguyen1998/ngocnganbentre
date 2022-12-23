import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import AuthorExpanded from '@widgets/AuthorExpanded'
import { useBlogAuthors } from '@helpers-blog'
import ContactForm from '@widgets/ContactForm'
import ContactInfo from '@widgets/ContactInfo'
import Commitment from '@widgets/Commitment'

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
          <Divider />
        </Main>
          <ContactForm />
      </Stack>
    </Layout>
  )
}

export default PageAuthors
