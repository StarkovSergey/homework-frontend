import { NavLink } from 'react-router'
import { clsx } from 'clsx'
import { ThemeSwitcher } from '@/widgets/theme-switcher/ThemeSwitcher.tsx'
import s from './header.module.css'

const NAV_LINKS = [
  { to: '/', label: 'Sprint\u00A01', id: 'nav-link-sprint-1' },
  { to: '/sprint-2', label: 'Sprint\u00A02', id: 'nav-link-sprint-2' },
  { to: '/sprint-3', label: 'Sprint\u00A03', id: 'nav-link-sprint-3' },
  { to: '/sprint-4', label: 'Sprint\u00A04', id: 'nav-link-sprint-4' },
  { to: '/sprint-5', label: 'Sprint\u00A05', id: 'nav-link-sprint-5' },
]

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={clsx('container', s.container)}>
        <nav>
          <ul className={s.list}>
            {NAV_LINKS.map(({ to, label, id }) => (
              <li key={id}>
                <NavLink className={s.link} to={to} end={to === '/'} id={id}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={s.themeSwitcherBox}>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
