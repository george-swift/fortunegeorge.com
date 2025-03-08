export function sendMessage(data: FormData) {
  const formspreeURL =
    'https://formspree.io/p/2353853758481366523/f/contactForm'

  return fetch(formspreeURL, {
    method: 'post',
    body: data,
    headers: { Accept: 'application/json' }
  })
}
