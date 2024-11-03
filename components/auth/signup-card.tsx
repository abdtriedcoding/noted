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

export default function SignUpCard({
  setState,
}: {
  setState: (state: 'signIn' | 'signUp' | 'reset') => void
}) {
  const { signIn } = useAuthActions()

  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleProviderSignUp = (value: 'github' | 'google') => {
    setLoading(true)
    void signIn(value).finally(() => {
      setLoading(false)
    })
  }

  const handleCredentialsSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Password do not match')
      return
    }

    if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password)
    ) {
      setError(
        'Password must be 8+ characters, with a number, lowercase, and uppercase letter'
      )
      return
    }

    setLoading(true)

    void signIn('password', {
      name,
      email,
      password,
      flow: 'signUp',
    })
      .catch(() => {
        setError('Something went wrong')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Signup to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6 mx-6">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <p className="flex-1"> {error}</p>
        </div>
      )}
      <CardContent>
        <form
          onSubmit={handleCredentialsSignUp}
          className="grid w-full items-center gap-4"
        >
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={loading}
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>
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
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={loading}
              type="password"
              id="confirmPassword"
              placeholder="Enter your confirm password"
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
            onClick={() => handleProviderSignUp('github')}
            variant={'secondary'}
          >
            <GoogleLogo className="mr-2 h-4 w-4" />
            Login with Google
          </Button>
          <Button
            disabled={loading}
            onClick={() => handleProviderSignUp('github')}
            variant={'secondary'}
          >
            <GitHubLogo className="mr-2 h-4 w-4" />
            Login with Github
          </Button>
        </div>
        <p className="pt-4 text-sm text-muted-foreground">
          Already have an account ?{' '}
          <span
            onClick={() => setState('signIn')}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </CardContent>
    </Card>
  )
}
