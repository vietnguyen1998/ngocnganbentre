import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Label,
  Input,
  Textarea,
  Button,
  Message,
  Spinner,
  Divider
} from 'theme-ui'
import Modal from 'react-modal'
import { useLocalStorageState } from '@components/utils'
import { toast } from 'react-toastify'
import { nodes } from '@components/Shopping/data'

/**
 * How to enable form integration:
 *
 * 1) Shadow this component
 * 2) Remove the demo attribute from the form tag.
 * 3) Add your action end-point to the form tag.
 * 4) If required by your form API provider, add the hidden input(s).
 *
 * Some recommended serverless form providers:
 * Getform (https://www.gatsbyjs.com/docs/building-a-contact-form/#getform)
 * Formspree (https://www.gatsbyjs.com/docs/building-a-contact-form/#formspree)
 * Netlify Form (https://www.gatsbyjs.com/docs/building-a-contact-form/#netlify)
 *
 */
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    minWidth: 400,
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}
const BookingForm = ({
  handleSubmit,
  submitting,
  success,
  items,
  setItems
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [event, setEvent] = React.useState(null)
  const [user, setUser] = useLocalStorageState('user', {
    name: '',
    phone: '',
    address: ''
  })
  const [itemsFull, setItemsFull] = React.useState([])
  const [total, setTotal] = React.useState(0)
  const [stringValue, setStringValue] = React.useState('')

  React.useEffect(() => {
    let _nodes = [...nodes]
    let _items = []
    let values = ''
    items.map(x => {
      let _item = _nodes.filter(y => y.id == x.id)
      _item[0].count = x.count
      values += `(${_item[0].title} ${_item[0].price}. SL ${x.count}- ${
        x.count * _item[0].price
      }) `
      _items.push(_item[0])
    })
    setItemsFull(_items)
    let total = 0
    _items.map(x => (total += x.price * x.count))
    values += `(Tổng: ${total})`
    setStringValue(values)
    setTotal(total)
  }, [items, setItems, items.count])

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function customSubmit(e) {
    e.preventDefault()
    if (itemsFull && itemsFull.length == 0) {
      toast.error('Giỏ hàng chưa có sản phẩm nào')
      return
    }
    openModal()
    setEvent(e)
    return
  }

  function handleSubmitCustom() {
    handleSubmit(event, { values: stringValue })
    closeModal()
    setItems([])
  }

  return (
    <form
      onSubmit={customSubmit}
      method='POST'
      // action='YOUR_ACTION_END_POINT'
      demo='demo'
    >
      {success === true && (
        <Message variant='success'>Cảm ơn bạn, Shop sẽ lên hệ bạn sớm</Message>
      )}
      {success === false && (
        <Message variant='error'>
          Hệ thống đang bảo trì, vui lòng thử lại sau!
        </Message>
      )}
      <Box variant='forms.row'>
        <Box variant='forms.column'>
          <Label htmlFor='contact-form-name'>Tên</Label>
          <Input
            type='text'
            id='contact-form-name'
            name='name'
            required
            defaultValue={user.name}
          />
        </Box>
        <Box variant='forms.column'>
          <Label htmlFor='contact-form-phone'>Số Điện Thoại</Label>
          <Input
            type='tel'
            placeholder='0123 456 789'
            defaultValue={user.phone}
            id='contact-form-phone'
            name='phone'
            required
          />
        </Box>
      </Box>
      {/* <Box variant='forms.row'>
        <Box variant='forms.column'>
          <Label htmlFor='contact-form-email'>Email</Label>
          <Input
            type='email'
            placeholder='email@example.com'
            id='contact-form-email'
            name='email'
            required
          />
        </Box>
        
      </Box> */}
      {/* <Box variant='forms.row'>
        <Label htmlFor='contact-form-subject'>Subject</Label>
        <Input type='text' id='contact-form-subject' name='subject' required />
      </Box> */}
      <Box variant='forms.row'>
        <Label htmlFor='contact-form-message'>Địa Chỉ</Label>
        <Textarea
          name='message'
          id='contact-form-message'
          required
          defaultValue={user.address}
        />
      </Box>
      <Button
        variant={success || submitting ? 'disabled' : 'primary'}
        disabled={success || submitting}
        required
        type='submit'
      >
        Gửi {submitting && <Spinner size='20' />}
      </Button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <p style={{margin: 0, fontSize: 20, fontWeight: "bold", marginBottom: 8}}>* Xác Nhận Đặt Hàng</p>
        <div
          style={{
            background: '#E2E8F0',
            padding: '4px 8px',
            borderRadius: 4,
            marginBottom: 16
          }}
        >
          <p style={{ margin: 0 }}>{user.name + ' (' + user.phone + ')'}</p>
          <p style={{ margin: 0 }}>{user.address}</p>
        </div>
        {itemsFull &&
          itemsFull.map(x => {
            return (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 6
                }}
              >
                <div>
                  <span>{x.title}</span>
                  <span></span>
                  {`. (SL ${x.count} - ${parseInt(x.price).toLocaleString(
                    'it-IT',
                    {
                      style: 'currency',
                      currency: 'VND'
                    }
                  )})`}
                </div>
                <div style={{ width: 120, textAlign: 'right' }}>
                  {parseInt(x.price * x.count).toLocaleString('it-IT', {
                    style: 'currency',
                    currency: 'VND'
                  })}
                </div>
              </div>
            )
          })}
        <Divider style={{ margin: '12px 0' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold'
          }}
        >
          <div>Tổng</div>
          <div style={{ width: 120, textAlign: 'right' }}>
            {parseInt(total).toLocaleString('it-IT', {
              style: 'currency',
              currency: 'VND'
            })}
          </div>
        </div>

        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'end' }}>
          <Button
            variant='dark'
            mr={2}
            style={{ minWidth: 60 }}
            onClick={closeModal}
          >
            Hủy
          </Button>
          <Button onClick={handleSubmitCustom}>Gửi</Button>
        </div>
      </Modal>
    </form>
  )
}

export default BookingForm

BookingForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  success: PropTypes.bool
}
