'use client'

import Marquee from '../ui/marquee'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

import Section from './section'

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <span
      className={cn(
        'bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary',
        className
      )}
    >
      {children}
    </span>
  )
}

export interface TestimonialCardProps {
  name: string
  role: string
  img?: string
  description: React.ReactNode
  className?: string
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) => (
  <div
    className={cn(
      'mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4',
      'border border-neutral-200 bg-white',
      'dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      className
    )}
    {...props}
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        src={img ?? ''}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
)

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'CTO at Tech Innovators',
    img: 'https://randomuser.me/api/portraits/men/91.jpg',
    description: (
      <p>
        The unified workspace has revolutionized our product development. It
        integrates all our tasks, communication, and document management in one
        place. A game-changer for tech companies.
      </p>
    ),
  },
  {
    name: 'Sophia Turner',
    role: 'Marketing Director at NextGen Solutions',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    description: (
      <p>
        The collaborative tools have transformed our marketing strategies.
        Real-time brainstorming and document sharing have increased our campaign
        efficiency. Highly recommend it.
      </p>
    ),
  },
  {
    name: 'Ravi Kumar',
    role: 'Founder & CEO at StartUp Grid',
    img: 'https://randomuser.me/api/portraits/men/45.jpg',
    description: (
      <p>
        As a startup, we needed a platform that could keep up with our rapid
        growth. This platform’s task management and progress tracking features
        have doubled our development speed. Essential for any startup.
      </p>
    ),
  },
  {
    name: 'Emma Li',
    role: 'Product Manager at Digital Dynamics',
    img: 'https://randomuser.me/api/portraits/women/83.jpg',
    description: (
      <p>
        Creating and organizing documents is now a breeze. The platform’s
        integrated features make global collaboration seamless and efficient.
        Perfect for product teams.
      </p>
    ),
  },
  {
    name: 'Michael Nguyen',
    role: 'Data Scientist at FinTech Innovations',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
    description: (
      <p>
        The advanced analytics have revolutionized our financial models. Our
        strategies are now driven by accurate, real-time data. Transformative
        for the finance industry.
      </p>
    ),
  },
  {
    name: 'Linda Wang',
    role: 'Operations Director at LogiChain Solutions',
    img: 'https://randomuser.me/api/portraits/women/5.jpg',
    description: (
      <p>
        The supply chain optimization tools have drastically reduced our costs.
        Efficiency and accuracy in logistics have never been better.
      </p>
    ),
  },
  {
    name: 'Karl Berg',
    role: 'R&D Lead at EcoInnovate',
    img: 'https://randomuser.me/api/portraits/men/14.jpg',
    description: (
      <p>
        Integrating sustainable practices has been seamless with this platform.
        We’ve significantly reduced our carbon footprint. Leading the way in
        eco-friendly business.
      </p>
    ),
  },
  {
    name: 'Aisha Ahmed',
    role: 'Marketing Manager at Fashion Forward',
    img: 'https://randomuser.me/api/portraits/women/56.jpg',
    description: (
      <p>
        The real-time collaboration tools have transformed how we approach
        fashion trends. Our campaigns are more engaging and data-driven.
        Revolutionizing fashion marketing.
      </p>
    ),
  },
  {
    name: 'Thomas Kim',
    role: 'IT Director at HealthTech Solutions',
    img: 'https://randomuser.me/api/portraits/men/18.jpg',
    description: (
      <p>
        Implementing this platform in our patient care systems has significantly
        improved outcomes. Technology and healthcare working together for better
        health. A milestone in medical technology.
      </p>
    ),
  },
  {
    name: 'Sofia Garcia',
    role: 'CEO at EduTech Innovations',
    img: 'https://randomuser.me/api/portraits/women/73.jpg',
    description: (
      <p>
        The personalized learning plans have doubled student performance
        metrics. Education tailored to each student’s need Transforming the
        education landscape.
      </p>
    ),
  },
  {
    name: 'Jakob Nielsen',
    role: 'CTO at SecureNet Tech',
    img: 'https://randomuser.me/api/portraits/men/25.jpg',
    description: (
      <p>
        With AI-driven security features, our data protection levels are
        unparalleled. Ensuring safety and trust in digital spaces. Redefining
        cybersecurity standards.
      </p>
    ),
  },
  {
    name: 'Nadia Kaur',
    role: 'Product Manager at Creative Solutions',
    img: 'https://randomuser.me/api/portraits/women/78.jpg',
    description: (
      <p>
        The platform has streamlined our creative process, enhancing
        productivity and innovation. Merging creativity and technology
        seamlessly. A game-changer for creative industries.
      </p>
    ),
  },
  {
    name: 'Omar Hussain',
    role: 'Founder at Startup Hub',
    img: 'https://randomuser.me/api/portraits/men/54.jpg',
    description: (
      <p>
        The insights into startup ecosystems have been invaluable for our
        growth. Empowering startups with data-driven decisions. A catalyst for
        startup success.
      </p>
    ),
  },
]

export default function Testimonials() {
  return (
    <Section
      title="Customer Testimonials"
      subtitle="What Our Users Say"
      className="max-w-8xl"
    >
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  '[--duration:60s]': i === 1,
                  '[--duration:30s]': i === 2,
                  '[--duration:70s]': i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  )
}
