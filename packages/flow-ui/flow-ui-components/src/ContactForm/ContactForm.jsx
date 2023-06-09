import React from 'react'
import PropTypes from 'prop-types'
import { Box, Label, Input, Textarea, Button, Message, Spinner } from 'theme-ui'
import { useLocalStorageState } from '@components/utils'
import { toast } from 'react-toastify';
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


const ContactForm = ({ handleSubmit, submitting, success }) => {
  const [user, setUser] = useLocalStorageState(
		'user',
		{
      name: '',
      phone: '',
    }
	)

  function handleSubmitCustom(e){
    handleSubmit(e)
    toast.success("Gửi thành công, Shop sẽ liên hệ bạn sớm!")
  }
  return (
    <form
      onSubmit={handleSubmitCustom}
      method='POST'
      action='YOUR_ACTION_END_POINT'
      demo='demo'
    >
      {success === true && (
        <Message variant='success'>
          Cảm ơn bạn, Shop sẽ lên hệ bạn sớm
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
          <Input type='text' id='contact-form-name' name='name' required 
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
        <Label htmlFor='contact-form-message'>Nội Dung</Label>
        <Textarea name='message' id='contact-form-message' required />
      </Box>
      <Button
        variant={success || submitting ? 'disabled' : 'primary'}
        disabled={success || submitting}
        type='submit'
        required
      >
        Gửi {submitting && <Spinner size='20' />}
      </Button>
    </form>
  )
}
export default ContactForm

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  success: PropTypes.bool
}
