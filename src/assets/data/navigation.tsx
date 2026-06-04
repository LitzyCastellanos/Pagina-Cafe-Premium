import type { NavigationSection } from '@/components/blocks/menu-navigation'

export const navigationData: NavigationSection[] = [
  { title: 'Inicio', href: '#inicio' },
  {
    title: 'Catálogo',
    items: [
      { title: 'Granos de Especialidad', href: '#granos' },
      { title: 'Moliendas', href: '#moliendas' },
      { title: 'Por Origen', href: '#origenes' }
    ]
  },
  { title: 'Ediciones Especiales', href: '#ediciones' },
  { title: 'Suscripción Cafetera', href: '#suscripcion' },
  { title: 'Contacto', href: '#contacto' }
]
