import React from 'react'
import { SideCard } from '@core/ui-kit'
import { calculateAge } from '@core/services'
import styles from './About.module.scss'

export const About: React.FC = () => {
  const age = calculateAge(new Date(1994, 6, 18))
  return (
    <SideCard>
      <article className={styles.article}>
        <h1 className={styles.header}>about me</h1>
        <h2 className={styles.info}>
          <span>{age} years</span>
          <span>New York</span>
        </h2>
        <h3 className={styles.info}>Software Engineer</h3>
        <p>
          JavaScript/GoLang Developer with a Bachelor’s Degree in Computer
          Science in Information Technology from Belarusian State University of
          Informatics and Radioelectronics and 5+ years of software development
          experience.
        </p>
        <p>Analytical thinker who can solve complicated problems quickly.</p>
      </article>
    </SideCard>
  )
}
