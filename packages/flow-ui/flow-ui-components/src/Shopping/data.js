import vu_sua_bonsai from '../../assets/vu-sua-bonsai.jpg'
import ot_giong from '../../assets/ot_giong.jpg'
import mai_vang from '../../assets/mai_vang.jpg'
export const CATEGORIES = {
  CAY_GIONG: "CAY_GIONG",
  HOA_KIENG: "HOA_KIENG",
  MAI_VANG: "MAI_VANG"
}
export const nodes = [
  {
    id: '1',
    title: 'Ớt giống',
    price: '150.000 đ',
    category: CATEGORIES.CAY_GIONG,
    slug: '',
    thumbnail: {
      __typename: 'ImageSharp',
      ImageSharp_vertical: {
        layout: 'constrained',
        images: {
          fallback: {
            src: ot_giong,
          },
        },
        width: 380,
        height: 290
      },
    }
  },
  {
    id: '2',
    title: 'Vú sữa hoàng kim Bonsai 40x20x20cm',
    price: '150.000đ',
    category: CATEGORIES.HOA_KIENG,
    slug: '',
    thumbnail: {
      __typename: 'ImageSharp',
      ImageSharp_vertical: {
        layout: 'constrained',
        images: {
          fallback: {
            src: vu_sua_bonsai,
          },
        },
        width: 380,
        height: 290
      },
    }
  },
  {
    id: '3',
    title: 'Mai vàng cúc thọ hương',
    price: '155.000đ',
    category: CATEGORIES.MAI_VANG,
    slug: '',
    thumbnail: {
      __typename: 'ImageSharp',
      ImageSharp_vertical: {
        layout: 'constrained',
        images: {
          fallback: {
            src: mai_vang,
          },
        },
        width: 380,
        height: 290
      },
    }
  },
]
