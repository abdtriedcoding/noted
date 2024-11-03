'use client'

import { useState } from 'react'

import SignInCard from '@/components/auth/signin-card'
import SignUpCard from '@/components/auth/signup-card'

export default function AuthScreen() {
  const [state, setState] = useState<'signIn' | 'signUp' | 'reset'>('signIn')
  return (
    <>
      {state === 'signIn' ? (
        <SignInCard setState={setState} />
      ) : (
        <SignUpCard setState={setState} />
      )}
    </>
  )
}
