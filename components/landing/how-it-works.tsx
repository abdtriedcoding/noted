import { Clipboard, Pencil, Upload, Users } from 'lucide-react'

import Features from '@/components/landing/features-vertical'
import Section from '@/components/landing/section'

const data = [
  {
    id: 1,
    title: '1. Create Your Workspace',
    content:
      'Start by setting up your workspace tailored to your needs. Whether you’re working solo or with a team, create an environment for your projects.',
    image: '/herosection-image.png',
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: '2. Document Creation and Organization',
    content:
      'Much like Notion, create and manage documents effortlessly. Organize your notes, ideas, and plans in one centralized location.',
    image: '/herosection-image.png',
    icon: <Pencil className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: '3. Collaborative Design and Brainstorming',
    content:
      'Just like Miro, collaborate in real-time. Create designs, brainstorm ideas, and work together on projects within the same interface.',
    image: '/herosection-image.png',
    icon: <Users className="w-6 h-6 text-primary" />,
  },
  {
    id: 4,
    title: '4. Task Management and Progress Tracking',
    content:
      'Inspired by Trello, manage tasks and track progress effectively. Create boards, assign tasks, set deadlines, and monitor the status of your projects.',
    image: '/herosection-image.png',
    icon: <Clipboard className="w-6 h-6 text-primary" />,
  },
]

export default function HowItWorks() {
  return (
    <Section
      title="How Our Platform Works"
      subtitle="Enhance Productivity and Collaboration in 4 Easy Steps"
    >
      <Features data={data} />
    </Section>
  )
}
