import s from './Footer.module.css'
import { clsx } from 'clsx'
import { GithubIcon } from '@/shared/svg-components/github-icon.tsx'
import { Logo } from '@/shared/svg-components/logo.tsx'

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={clsx('container', s.container)}>
        <a href="https://it-incubator.io/education/front-end" target="_blank" rel="noopener noreferrer">
          <Logo width={150} height={40} />
        </a>

        <a
          className={s.link}
          href="https://github.com/it-incubator/homework-front"
          target="_blank"
          rel="noopener noreferrer">
          <GithubIcon width={30} height={30} />
        </a>
      </div>
    </footer>
  )
}
