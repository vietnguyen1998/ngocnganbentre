import React from 'react'
import { Link } from 'gatsby'
import { Flex, Button, Heading, Text } from 'theme-ui'
import { FaRegHandshake } from 'react-icons/fa'

const styles = {
  wrapper: {
    alignItems: `center`,
    flexDirection: `column`,
    bg: `omegaLighter`,
    borderRadius: `lg`,
    size: `full`,
    p: 4,
  },
  heading: {
    color: `omegaDark`,
    // wordSpacing: 500, //force line breaks
    svg: {
      color: `beta`,
      size: `icon.lg`,
      display: `block`,
      mb: 3,
    },
  },
  subheading: {
    color: `omegaDark`,
    fontWeight: `normal`,
  },
  list: {
    color: `omegaDark`,
    listStyle: `none`,
    m: 0,
    p: 0,
    li: {
      p: 0,
      my: 2,
    },
    'li:before': {
      content: `""`,
      display: `inline-block`,
      width: `icon.xs`,
      bg: `success`,
      borderRadius: `full`,
      size: `7px`,
      mr: `7px`,
    },
  },
  button: {
    display: `block`,
    mt: `auto`,
  },
}

const BannerVertical = () => (
  <Flex sx={styles.wrapper}>
    <Heading variant='h2' sx={styles.heading}>
      <FaRegHandshake />
      Shop cây giống Ngọc Ngân
    </Heading>
    <Heading variant='h4' sx={styles.subheading}>
      SĐT + ĐỊA CHỈ . Shop sẽ gọi lại ngay cho bạn để giao hàng sớm nhất. 
    </Heading>
    <Text as='ul' variant='s  mall' sx={styles.list}>
      <li>Ship hàng toàn quốc.</li>
      <li>Giao hàng trước, trả tiền sau.</li>
      <li>Shop cam kết sản phẩm của shop như mô tả. Nhận hàng - Kiểm hàng mới thanh toán.</li>
      <li>Không giống hình có thể hoàn trả.</li>
    </Text>
    <Button
      variant='primary'
      as={Link}
      to='/contact'
      sx={styles.button}
      aria-label='Learn More'
    >
      Liên Hệ Ngay
    </Button>
  </Flex>
)

export default BannerVertical
