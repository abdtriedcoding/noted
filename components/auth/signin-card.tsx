import { useAuthActions } from '@convex-dev/auth/react'
import { AlertTriangle } from 'lucide-react'
import { useState } from 'react'

import { GitHubLogo } from '@/components/auth/github-logo'
import { GoogleLogo } from '@/components/auth/google-logo'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function SignInCard({
  setState,
}: {
  setState: (state: 'signIn' | 'signUp' | 'reset') => void
}) {
  const { signIn } = useAuthActions()

  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleProviderSignIn = (value: 'github' | 'google') => {
    setLoading(true)
    void signIn(value).finally(() => {
      setLoading(false)
    })
  }

  const handleCredentialsSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    void signIn('password', { email, password, flow: 'signIn' })
      .catch(() => {
        setError('Invalid email or password')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Login to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6 mx-6">
          <AlertTriangle className="size-4" />
          <p> {error}</p>
        </div>
      )}
      <CardContent>
        <form
          onSubmit={handleCredentialsSignIn}
          className="grid w-full items-center gap-4"
        >
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <Button disabled={loading} type="submit" className="w-full">
            Continue
          </Button>
        </form>
        <Separator className="my-4" />
        <div className="flex flex-col space-y-3">
          <Button
            disabled={loading}
            onClick={() => handleProviderSignIn('google')}
            variant={'secondary'}
          >
            <GoogleLogo className="mr-2 h-4 w-4" />
            Login with Google
          </Button>
          <Button
            disabled={loading}
            onClick={() => handleProviderSignIn('github')}
            variant={'secondary'}
          >
            <GitHubLogo className="mr-2 h-4 w-4" />
            Login with Github
          </Button>
        </div>
        <p className="pt-4 text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <span
            onClick={() => setState('signUp')}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </CardContent>
    </Card>
  )
}
