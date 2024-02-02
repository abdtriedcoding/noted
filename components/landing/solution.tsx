'use client';

import { motion } from 'framer-motion';



import { cn } from '@/lib/utils';



import Safari from '@/components/landing/safari';
import Section from '@/components/landing/section';
import FlickeringGrid from '@/components/ui/flickering-grid';
import Ripple from '@/components/ui/ripple';


const features = [
  {
    title: 'Unified Task Management',
    description:
      'Manage all your tasks and projects in one place, ensuring nothing falls through the cracks.',
    className:
      'hover:bg-blue-500/10 dark:hover:bg-blue-700/10 transition-all duration-500 ease-out',
    content: (
      <Safari
        src={`/herosection-image.png`}
        className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
      />
    ),
  },
  {
    title: 'Seamless Collaboration',
    description:
      'Facilitate effortless team communication and collaboration with integrated chat and video conferencing tools.',
    className:
      'order-3 xl:order-none hover:bg-green-500/10 dark:hover:bg-green-700/10 transition-all duration-500 ease-out',
    content: (
      <Safari
        src={`/herosection-image.png`}
        className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
      />
    ),
  },
  {
    title: 'Integrated Document Creation',
    description:
      'Create, edit, and share documents without ever leaving the platform, keeping everything organized and accessible.',
    className:
      'md:row-span-2 hover:bg-purple-500/10 dark:hover:bg-purple-700/10 transition-all duration-500 ease-out',
    content: (
      <>
        <FlickeringGrid
          className="z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.1}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <Safari
          src={`/herosection-image.png`}
          className="-mb-48 ml-12 mt-16 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
  {
    title: 'Real-Time Project Tracking',
    description:
      'Monitor project progress and deadlines in real-time to stay on top of all your deliverables.',
    className:
      'flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-orange-500/10 dark:hover:bg-orange-700/10 transition-all duration-500 ease-out',
    content: (
      <>
        <Ripple className="absolute -bottom-full" />
        <Safari
          src={`/herosection-image.png`}
          className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
        />
      </>
    ),
  },
]


export default function Solution() {
  return (
    <Section
      title="Unified Platform Solutions"
      subtitle="Streamline Your Workflow and Boost Productivity"
      description="Our platform combines all essential tools into one, making it easy to manage tasks, collaborate with teams, and track progress efficiently."
      className="bg-neutral-100 dark:bg-neutral-900"
    >
      <div className="mx-auto mt-16 grid max-w-sm grid-cols-1 gap-6 text-gray-500 md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={cn(
              'group relative items-start overflow-hidden bg-neutral-50 dark:bg-neutral-800 p-6 rounded-2xl',
              feature.className
            )}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-semibold mb-2 text-primary">
                {feature.title}
              </h3>
              <p className="text-foreground">{feature.description}</p>
            </div>
            {feature.content}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}