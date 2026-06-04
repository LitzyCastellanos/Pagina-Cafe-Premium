// src/components/blocks/popular-dishes/popular-dishes.tsx

import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import type { CafeProduct } from '@/assets/data/popular-dishes'

type PopularDishesProps = {
  popularDishes: CafeProduct[]
  title?: string
  subtitle?: string
}

const CafeCard = ({ imgUrl, nombre, tueste, precio, detalles, exclusivo, precioAnterior, badge }: CafeProduct) => {
  return (
    <Card className='hover:border-primary overflow-hidden rounded-none py-0 shadow-none transition-colors duration-300 relative'>

      {/* Badge exclusivo - sección 4 */}
      {exclusivo && badge && (
        <span className='absolute top-3 left-3 z-10 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow'>
          {badge}
        </span>
      )}

      <CardContent className='px-0'>
        <div className='bg-muted'>
          <img
            src={imgUrl}
            alt={nombre}
            className='h-52 w-full object-cover'
            loading='lazy'
          />
        </div>

        <div className='space-y-3 px-5 py-4'>
          <CardTitle className='text-lg'>{nombre}</CardTitle>
          <Separator />

          {/* Tueste */}
          <p className='text-sm font-medium text-primary'>{tueste}</p>

          {/* Detalles */}
          <div className='text-muted-foreground text-sm space-y-1'>
            <p><span className='font-medium text-foreground'>Altura:</span> {detalles.altura}</p>
            <p><span className='font-medium text-foreground'>Nota de cata:</span> {detalles.notaCata}</p>
            <p><span className='font-medium text-foreground'>Proceso:</span> {detalles.proceso}</p>
          </div>

          <Separator />

          {/* Precio - con precio anterior tachado si es exclusivo */}
          <div className='flex items-center gap-3'>
            {precioAnterior && (
              <span className='text-sm text-muted-foreground line-through'>{precioAnterior}</span>
            )}
            <span className={`font-bold ${exclusivo ? 'text-xl text-amber-600' : 'text-base text-foreground'}`}>
              {precio}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const PopularDishes = ({ popularDishes, title = 'Catálogo de Café', subtitle }: PopularDishesProps) => {
  return (
    <section id='popular-dishes' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center sm:mb-16'>
          <Badge variant='outline' className='text-sm font-normal'>
            Café Premium Copán
          </Badge>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>{title}</h2>
          {subtitle && (
            <p className='text-muted-foreground text-xl'>{subtitle}</p>
          )}
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:gap-y-10 xl:grid-cols-4'>
          {popularDishes.map((cafe, index) => (
            <CafeCard key={index} {...cafe} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default PopularDishes
