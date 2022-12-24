import React from 'react'
import PropTypes from 'prop-types'
import { Box, Label, Input, Textarea, Button, Message, Spinner } from 'theme-ui'
import Modal from 'react-modal'

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
const BookingForm = ({ handleSubmit, submitting, success }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [event, setEvent] = React.useState(null)

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  function customSubmit(e) {
    e.preventDefault()
    openModal()
    setEvent(e)
    return
  }

  function handleSubmitCustom() {
    handleSubmit(event)
    closeModal()
  }

  return (
    <form
      onSubmit={customSubmit}
      method='POST'
      // action='YOUR_ACTION_END_POINT'
      demo='demo'
    >
      {success === true && (
        <Message variant='success'>
          Cảm ơn bạn, chúng tôi sẽ lên hệ bạn sớm
        </Message>
      )}
      {success === false && (
        <Message variant='error'>
          Hệ thống đang bảo trì, vui lòng thử lại sau!
        </Message>
      )}
      <Box variant='forms.row'>
        <Box variant='forms.column'>
          <Label htmlFor='contact-form-name'>Tên</Label>
          <Input type='text' id='contact-form-name' name='name' required />
        </Box>
        <Box variant='forms.column'>
          <Label htmlFor='contact-form-phone'>Số Điện Thoại</Label>
          <Input
            type='tel'
            placeholder='(xxx) xxx-xxxx'
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
        <Textarea name='message' id='contact-form-message' required />
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
        <div>I am a modal</div>
        <button onClick={handleSubmitCustom}>close</button>
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
