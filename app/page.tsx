import { Fragment } from 'react'
import Link from 'next/link'

import { Container } from '@/components/container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/social-icons'

function SocialLink({
  icon: Icon,
  ...props
}: {
  href: string
  icon: React.FC<{ className: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default function Home(): JSX.Element {
  return (
    <Fragment>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Jonathan Steele
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Jonathan, a software developer and developer advocate. I
            currently work at{' '}
            <a className="font-semibold text-indigo-500" href="//stripe.com">
              Stripe
            </a>
            , where I help developers build world-class payment experiences.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="//twitter.com/ynnoj"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="//github.com/ynnoj"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="//www.linkedin.com/in/ynnoj"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
    </Fragment>
  )
}
