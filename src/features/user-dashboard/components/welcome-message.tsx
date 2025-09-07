'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Profile } from '@/types/profile-types'

export default function WelcomeHeader({ profile }: { profile: Partial<Profile> | null }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const text = `Hi, ${profile?.first_name || profile?.full_name || ''}`
  const splittedText = text.split('');

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  return (
    <div>
      <h1 className="text-3xl font-bold flex flex-wrap" ref={ref}>
        {splittedText.map((char, i) => (
          <motion.span
            key={i}
            variants={pullupVariant}
            initial="initial"
            animate={isInView ? 'animate' : ''}
            custom={i}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </h1>
      <motion.p
        className="py-2 text-muted-foreground"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Welcome to Multiplayer Study Room
      </motion.p>
    </div>
  );
}
