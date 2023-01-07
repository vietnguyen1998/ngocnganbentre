import { useLocalStorageState } from '@components/utils';
import { useState, useEffect, useCallback } from 'react'
import Telegram from 'telegram-send-message';

const Token = '5835487697:AAHxWURj_BUVqLmAk5moYYCrsf30SWZ9OvY'
const Bot = '2144078824'

function sentMessageToTelegram(teleGram, message){
    teleGram.setToken(Token);
    teleGram.setRecipient(Bot);
    teleGram.setMessage(message);
    return teleGram.send();
}

const useForm = () => {
  const [submitting, setSubmitting] = useState(false)
  const [target, setTarget] = useState({})
  const [success, setSuccess] = useState()
  const [values, setValues] = useState()
  const [action, setAction] = useState()
  const [user, setUser] = useLocalStorageState(
		'user',
		{
      name: '',
      phone: '',
    }
	)
  const handleSubmit = (e, { values, action } = {}) => {
    e.preventDefault()
    let html = ""

    let name = ""
    let phone = ""
    let content = ""
    if(e.target && e.target.length > 0){
      name = e.target[0].value
      phone = e.target[1].value
      content = e.target[2].value
    }
    sentMessageToTelegram(Telegram, `${name} | ${phone} | ${content}`)
    setUser({name, phone})
    if (values) setValues(values)
    if (action) setAction(action)
    setTarget(e.target)
    setSubmitting(false)
    setSuccess(true)
  }

  const sendValues = useCallback(() => {
    const form = new FormData(target)
    const formData = new URLSearchParams(values || form).toString()
    const isDemo = target.getAttribute('demo')

    // Mimicking form submission for demos
    if (isDemo) {
      setTimeout(() => {
        setSuccess(true)
        setSubmitting(false)
      }, 1500)
      return
    }

    // Real form submission
    fetch(action || target.action, {
      method: target.method || 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      },
      body: formData
    })
      .then(() => {
        target.reset()
        setSuccess(true)
      })
      .catch(error => {
        setSuccess(false)
      })
      .finally(() => {
        setSubmitting(false)
      })
  }, [target])

  useEffect(() => {
    if (submitting) {
      sendValues()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitting, sendValues])

  const reset = useCallback(() => {
    setSubmitting(false)
    setSuccess(undefined)
    setValues(undefined)
    setAction(undefined)
  }, [])

  return {
    handleSubmit,
    submitting,
    success,
    reset
  }
}

export default useForm
