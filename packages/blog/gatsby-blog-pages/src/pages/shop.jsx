import React from 'react'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Shopping from '@components/Shopping'
import Seo from '@widgets/Seo'
import AuthorExpanded from '@widgets/AuthorExpanded'
import { useBlogAuthors } from '@helpers-blog'

const PageAuthors = props => {
  const authors = useBlogAuthors()

  return (
    <Layout {...props}>
      <Seo title='Shopping' />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <Shopping />
      </Stack>
    </Layout>
  )
}

export default PageAuthors
