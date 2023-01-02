import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'
import ContactInfo from '@widgets/ContactInfo'
import Commitment from '@widgets/Commitment'

const PageContact = props => (
  <Layout {...props}>
    <Seo title='Contact' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header="Liên Hệ"
          subheader='Điền thông tin của Anh/Chị vào Form bên dưới để được hổ trợ sớm nhất (Shop thường trả lời 
            sau 6h chiều từ T2-T6. Do em làm giờ hành chánh). Hoặc nhắn tin Zalo 0386 569 374, do em đầy bạn nên Anh/Chị nhắn 
            tin là em thấy và trả lời tin nhắn được'
        />
        <Divider />
        <ContactForm />
      </Main>
      <Sidebar>
        {/* <Commitment /> */}
        <Divider />
        <ContactInfo />
      </Sidebar>
    </Stack>
  </Layout>
)

export default PageContact
