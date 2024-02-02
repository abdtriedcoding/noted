import { PROBLEMS } from '@/lib/constants'

import Section from '@/components/landing/section'
import BlurFade from '@/components/ui/blur-fade'
import { Card, CardContent } from '@/components/ui/card'

export default function Problems() {
  return (
    <Section
      title="Challenges with Disconnected Workflows"
      subtitle="Why typical methods fall short"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mt-12">
        {PROBLEMS.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  )
}
