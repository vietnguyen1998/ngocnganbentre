import React from 'react'
import { Card } from 'theme-ui'
import BookingFormComponent from '@components/BookingForm'
import useForm from '@helpers/useForm'

const Booking = () => {
  const { handleSubmit, submitting, success } = useForm()

  return (
    <Card variant='paper'>
      <BookingFormComponent {...{ handleSubmit, submitting, success }} />
    </Card>
  )
}

export default Booking
