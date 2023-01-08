import React from 'react'
import { Card } from 'theme-ui'
import BookingFormComponent from '@components/BookingForm'
import useForm from '@helpers/useForm'

const Booking = ({items, setItems}) => {
  const { handleSubmit, submitting, success } = useForm()

  return (
    <Card variant='paper'>
      <BookingFormComponent
        handleSubmit={handleSubmit}
        submitting={submitting}
        success={success}
        items={items}
        setItems={setItems}
      />
    </Card>
  )
}

export default Booking
