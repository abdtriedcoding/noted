import { type Metadata } from 'next'

import AuthScreen from '@/components/auth/auth-screen'

export const metadata: Metadata = {
  title: 'Auth',
}

export default function SignInPage() {
  return <AuthScreen />
}
