'use client'

import { useEffect, useState } from 'react'

import ThemeToggle from '@/components/layout/theme-toggle'
import { MenuIcon, PhoneIcon, Clock8Icon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import MenuDropdown from '@/components/blocks/menu-dropdown'
import MenuNavigation from '@/components/blocks/menu-navigation'
import type { NavigationSection } from '@/components/blocks/menu-navigation'

import { cn } from '@/lib/utils'

const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const intersectingSections = entries.filter(entry => entry.isIntersecting)

        if (intersectingSections.length === 0) {
          setActiveSection('')
        } else {
          const mostVisible = intersectingSections.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          )

          setActiveSection(mostVisible.target.id)
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: '-100px 0px -50% 0px'
      }
    )

    sectionIds.forEach(id => {
      const element = document.getElementById(id)

      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

type HeaderProps = {
  navigationData: NavigationSection[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  const sectionIds = navigationData
    .map(item => item.href?.replace('#', ''))
    .filter(Boolean) as string[]

  const detectedActiveSection = useActiveSection(sectionIds)
  const activeSection = sectionIds.includes(detectedActiveSection) ? detectedActiveSection : ''

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 z-50 h-16 w-full border-b transition-all duration-300',
        { 'bg-background shadow-md': isScrolled },
        className
      )}
    >
      <div className='mx-auto flex h-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8'>

        {/* Logo */}
        <a href='/#inicio' className='flex shrink-0 items-center gap-2'>
          <img src='/images/logo-cafe-premium.jpg' alt='Café Premium Copán' className='h-9 w-auto' />
          <span className='text-primary text-base font-semibold whitespace-nowrap'>Café Premium Copán</span>
        </a>

        {/* Navegación */}
        <MenuNavigation
          navigationData={navigationData}
          activeSection={activeSection}
          className='**:data-[slot=navigation-menu-list]:gap-0.5 max-lg:hidden text-sm'
        />

        {/* Teléfono y horario */}
        <div className='hidden xl:flex shrink-0 items-center gap-3'>
          <div className='flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap'>
            <PhoneIcon className='size-3 text-primary' />
            <span>2662-1234</span>
          </div>
          <div className='h-3 w-px bg-border' />
          <div className='flex items-center gap-1.5 text-xs text-muted-foreground whitespace-nowrap'>
            <Clock8Icon className='size-3 text-primary' />
            <span>Lun-Vie 8am-6pm</span>
          </div>
        </div>

        {/* Acciones */}
        <div className='flex shrink-0 items-center gap-2'>
          <ThemeToggle />

          {/* Menú mobile */}
          <MenuDropdown
            align='end'
            navigationData={navigationData}
            activeSection={activeSection}
            trigger={
              <Button variant='outline' size='icon' className='rounded-full lg:hidden'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            }
          />
        </div>

      </div>
    </header>
  )
}

export default Header
