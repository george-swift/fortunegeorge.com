export function validatePayload(data: FormData) {
  const errors: { firstName?: string; email?: string; message?: string } = {}

  const firstName = String(data.get('first-name'))
  const email = String(data.get('email'))
  const message = String(data.get('message'))

  if (firstName.length < 1) {
    errors.firstName = 'Your first name is required'
  }
  if (!email.includes('@')) {
    errors.email = 'Invalid email address'
  }
  if (message.length < 2) {
    errors.message = 'Your message should be at least 2 characters'
  }

  return errors
}

export function sendMessage(data: FormData) {
  const formspreeURL =
    'https://formspree.io/p/2353853758481366523/f/contactForm'

  return fetch(formspreeURL, {
    method: 'post',
    body: data,
    headers: { Accept: 'application/json' }
  })
}
