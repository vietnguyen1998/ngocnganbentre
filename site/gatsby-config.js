module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-agency',
      options: {
        // Add theme options here. Check documentation for available options.
        siteUrl: process.env.URL || process.env.VERCEL_URL
      }
    }
  ],
  // Customize your site metadata:
  siteMetadata: {
    //General Site Metadata
    title: 'FlexiBlog Theme',
    name: 'FlexiBlog',
    description: 'My site description...',
    address: 'Cái Mơn, Chợ Lách',
    email: 'kimngan9374@gmail.com',
    phone: '0386 569 374',

    //Site Social Media Links
    social: [
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/ngan.nguyenngockim.77'
      },
      {
        name: 'Youtube',
        url: 'https://www.youtube.com/@ngocnganbentre'
      },
      {
        name: 'Instagram',
        url: '/'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Shop',
        slug: '/shop'
      },
      {
        name: 'Liên Hệ',
        slug: '/contact'
      }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Truy Cập Nhanh',
        items: [
          {
            name: 'Liên hệ',
            slug: '/contact'
          },
          {
            name: 'Thông tin shop',
            slug: '/about'
          },
          {
            name: 'Trợ giúp',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Thủ Tục Pháp Lí',
        items: [
          {
            name: 'Quyền Riêng Tư',
            slug: '/'
          },
          {
            name: 'Cookie Thông Tin',
            slug: '/'
          },
          {
            name: 'Điều Khoản Sử Dụng',
            slug: '/'
          }
        ]
      }
    ]
  }
}
