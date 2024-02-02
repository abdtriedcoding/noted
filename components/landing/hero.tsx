'use client'

import { useQuery } from 'convex/react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import { buttonVariants } from '@/components/ui/button'
import HeroVideoDialog from '@/components/ui/hero-video-dialog'

import { api } from '@/convex/_generated/api'
import { useCurrentUser } from '@/hooks/use-current-user'

const ease = [0.16, 1, 0.3, 1]

function HeroPill() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <div className="flex w-auto items-center space-x-2 rounded-full bg-primary/20 px-2 py-1 ring-1 ring-accent whitespace-pre">
        <div className="w-fit rounded-full bg-accent px-2 py-0.5 text-center text-xs font-medium text-primary sm:text-sm">
          🌟 New Platform
        </div>
        <p className="text-xs font-medium text-primary sm:text-sm">
          All Your Tools, One Platform
        </p>
      </div>
    </motion.div>
  )
}

function HeroTitles() {
  return (
    <div className="flex w-full flex-col max-w-5xl space-y-4 overflow-hidden pt-8">
      <motion.h1
        className="text-center text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl"
        initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        <motion.span
          className="block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          {`Your Ultimate Workspace: All Tasks, Teams, and Tools Together`}
        </motion.span>
      </motion.h1>
      <motion.p
        className="mx-auto max-w-4xl text-center text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-9 text-balance"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        {`Experience a revolutionary platform uniting all your tasks, collaboration, and essential tools to empower individuals and teams, making work effortless and efficient.`}
      </motion.p>
    </div>
  )
}

function HeroCTA() {
  return (
    <>
      <motion.div
        className="mx-auto mt-6 flex w-full max-w-2xl items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link
          href="/auth"
          className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}
        >
          Get Started
        </Link>
      </motion.div>
    </>
  )
}

function EnterWorkspaceButton() {
  const workspaces = useQuery(api.documents.getWorkspaces)

  let url = '/workspace'

  if (workspaces !== undefined && workspaces.length > 0) {
    url = `/workspace/${workspaces[0]?._id}`
  }

  return (
    <>
      <motion.div
        className="mx-auto mt-6 flex w-full max-w-2xl items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link
          href={url}
          className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}
        >
          Enter Workspace
        </Link>
      </motion.div>
    </>
  )
}

function HeroImage() {
  return (
    <motion.div
      className="relative mx-auto flex w-full items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease }}
    >
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/H8SyF0S2iHQ"
        thumbnailSrc="/herosection-image.png"
        thumbnailAlt="Unified Workspace Dashboard"
        className="border rounded-lg shadow-lg max-w-screen-lg mt-16"
      />
    </motion.div>
  )
}

export default function Hero() {
  const { user } = useCurrentUser()

  return (
    <div className="relative flex w-full flex-col items-center justify-start px-4 pt-32 sm:px-6 sm:pt-24 md:pt-40 lg:px-8">
      <HeroPill />
      <HeroTitles />
      {user ? <EnterWorkspaceButton /> : <HeroCTA />}
      <HeroImage />
    </div>
  )
}
