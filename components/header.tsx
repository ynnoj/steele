'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/container'
import avatarImage from '../app/avatar.jpg'

function Avatar({
  large = false,
  className,
  ...props
}: {
  large?: boolean
  className?: string
}): JSX.Element {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, 'pointer-events-auto')}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
          large ? 'h-16 w-16' : 'h-9 w-9'
        )}
        priority
      />
    </Link>
  )
}

export default function Header(): JSX.Element {
  return (
    <Fragment>
      <header className="pointer-events-none relative z-50 flex flex-col">
        <Fragment>
          <div className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]" />
          <Container className="top-0 order-last -mb-3 pt-3">
            <div className="top-[var(--avatar-top,theme(spacing.3))] w-full">
              <div className="relative">
                <Avatar large className="block h-16 w-16 origin-left" />
              </div>
            </div>
          </Container>
        </Fragment>
      </header>
    </Fragment>
  )
}
