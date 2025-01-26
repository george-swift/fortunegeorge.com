import toast from 'react-hot-toast'
import { data, useFetcher } from 'react-router'

import { Button } from '~/components/button'
import { Container } from '~/components/container'
import { Input } from '~/components/input'
import { Textarea } from '~/components/textarea'
import { sendMessage, validatePayload } from '~/lib/formspree'
import { socials } from '~/lib/utils'

import type { Route } from '../../+types/root'

export function meta() {
  return [
    { title: 'Contact - Fortune George' },
    { name: 'description', content: "Let's connect" }
  ]
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const errors = validatePayload(formData)

  if (Object.keys(errors).length > 0) {
    return data({ errors }, { status: 400 })
  }

  const response = await sendMessage(formData)

  return { ok: response.ok }
}

export async function clientAction({ serverAction }: Route.ClientActionArgs) {
  const data: unknown = await serverAction()

  if (!(data as { ok?: boolean }).ok) return data

  toast.success('Thanks for reaching out! Expect a reply within 1-2 days.')

  const form = document.getElementById('contact-form') as HTMLFormElement

  form.reset()
}

export default function Contact() {
  const fetcher = useFetcher()
  const pending = fetcher.state !== 'idle'
  const errors = fetcher.data?.errors

  return (
    <main className="grow w-full -mt-px [background:--accentToLightAccentGradient]">
      <Container
        as="section"
        className="px-[6vw] py-[6vw] -mt-px xl:py-[3vw] xl:px-[4vw]"
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
                id="first-name"
                name="first-name"
                label="First name"
                helperText={errors?.firstName}
                required
              />
              <Input
                id="last-name"
                name="last-name"
                label="Last name"
                wrapperClasses="mt-auto"
              />
              <Input
                type="email"
                id="email"
                name="email"
                label="Email"
                wrapperClasses="sm:col-span-2"
                helperText={errors?.email}
                required
              />
              <Textarea
                id="message"
                name="message"
                label="Message"
                wrapperClasses="sm:col-span-2"
                helperText={errors?.message}
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
