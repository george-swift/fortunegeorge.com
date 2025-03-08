import toast from 'react-hot-toast'
import { useFetcher } from 'react-router'
import { z } from 'zod'

import { Button } from '~/components/button'
import { Container } from '~/components/container'
import { Input } from '~/components/input'
import { Textarea } from '~/components/textarea'
import { sendMessage } from '~/lib/formspree'
import { socials } from '~/lib/utils'
import { schema } from '~/lib/validation'

import type { Route } from '../../+types/root'

export function meta() {
  return [
    { title: 'Contact - Fortune George' },
    { name: 'description', content: "Let's connect" }
  ]
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData()

  const validatedFields = schema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    message: formData.get('message')
  })

  if (!validatedFields.success) {
    const error = validatedFields.error.errors.reduce(
      (acc: Record<string, string>, { path, message }: z.ZodIssue) => (
        (acc[path.join('.')] = message), acc
      ),
      {}
    )

    return { ok: false, error }
  }

  const response = await sendMessage(formData)

  if (!response.ok) {
    toast.error('Oops! There was a problem submitting your message.')
    return
  }

  toast.success('Thanks for reaching out! Expect a reply within 1-2 days.')

  const form = document.getElementById('contact-form') as HTMLFormElement

  form.reset()
}

export default function Contact() {
  const fetcher = useFetcher()
  const pending = fetcher.state !== 'idle'
  const error = fetcher.data?.error

  return (
    <main className="grow w-full -mt-px [background:--accentToLightAccentGradient]">
      <Container
        as="section"
        className="p-[6vw] -mt-px xl:py-[3vw] xl:px-[4vw]"
      >
        <div className="grid grid-cols-1  gap-6 md:grid-cols-2">
          <div>
            <h2 className="max-w-4xl tracking-[.01rem] leading-[calc(1.3em_*_(1_+_(1_-_4)_/_25))] text-hero lg:text-[calc(2.5_*_1.2vw_+_1rem)] 2xl:text-[calc(3.5_*_1rem)]">
              Let’s connect.
            </h2>

            <dl className="mt-10 space-y-4 text-base/7">
              <div className="flex items-start gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">{socials.Linkedin.name}</span>
                  <socials.Linkedin.icon />
                </dt>
                <dd>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={socials.Linkedin.href}
                  >
                    Follow on {socials.Linkedin.name}
                  </a>
                </dd>
              </div>

              <div className="flex items-start gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">{socials.Upwork.name}</span>
                  <socials.Upwork.icon fill="currentColor" />
                </dt>
                <dd>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={socials.Upwork.href}
                  >
                    Send a proposal on {socials.Upwork.name}
                  </a>
                </dd>
              </div>

              <div className="flex items-start gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">{socials.Mail.name}</span>
                  <socials.Mail.icon />
                </dt>
                <dd>
                  <a href={socials.Mail.href}>Send an email</a>
                </dd>
              </div>

              <div className="flex items-start gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">{socials.Medium.name}</span>
                  <socials.Medium.icon fill="currentColor" />
                </dt>
                <dd>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={socials.Medium.href}
                  >
                    Follow on {socials.Medium.name}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <fetcher.Form
            method="post"
            id="contact-form"
            className="pb-24 sm:pb-32 lg:pb-48"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <Input
                id="firstName"
                name="firstName"
                label="First name"
                helperText={error?.firstName}
                required
              />
              <Input
                id="lastName"
                name="lastName"
                label="Last name"
                wrapperClasses="mt-auto"
              />
              <Input
                type="email"
                id="email"
                name="email"
                label="Email"
                wrapperClasses="sm:col-span-2"
                helperText={error?.email}
                required
              />
              <Textarea
                id="message"
                name="message"
                label="Message"
                wrapperClasses="sm:col-span-2"
                helperText={error?.message}
                required
              />
            </div>
            <div className="mt-8 flex justify-end">
              <Button type="submit" disabled={pending}>
                {pending ? 'Sending...' : 'Send message'}
              </Button>
            </div>
          </fetcher.Form>
        </div>
      </Container>
    </main>
  )
}
