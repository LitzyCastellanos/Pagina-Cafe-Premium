'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TruckIcon, CalculatorIcon } from 'lucide-react'

const PRECIO_BASE = 150 // L. por libra
const DESCUENTO_MAYOREO = 0.10 // 10% si >= 10 libras

const ciudades = [
  { label: 'Santa Rosa de Copán - Recogida Local', envio: 0 },
  { label: 'Tegucigalpa / SPS - Envío Express', envio: 120 },
  { label: 'Otras Ciudades - Envío Estándar', envio: 80 }
]

const ShippingCalculator = () => {
  const [libras, setLibras] = useState('')
  const [ciudadIndex, setCiudadIndex] = useState(0)
  const [resultado, setResultado] = useState<string | null>(null)

  const [desglose, setDesglose] = useState<{
    subtotal: number
    descuento: number
    envio: number
    total: number
  } | null>(null)

  const calcular = () => {
    const cantidad = parseFloat(libras)

    if (!cantidad || cantidad <= 0) {
      setResultado('Por favor ingresa una cantidad válida de libras.')
      setDesglose(null)

      return
    }

    const subtotal = cantidad * PRECIO_BASE
    const descuento = cantidad >= 10 ? subtotal * DESCUENTO_MAYOREO : 0
    const subtotalConDescuento = subtotal - descuento
    const envio = ciudades[ciudadIndex].envio
    const total = subtotalConDescuento + envio

    // Formato L. X,XXX
    const totalFormateado = total.toLocaleString('es-HN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })

    setResultado(`El total estimado de su pedido es L. ${totalFormateado}`)
    setDesglose({ subtotal, descuento, envio, total })
  }

  return (
    <section id='calculadora' className='py-8 sm:py-16 lg:py-24 bg-amber-50 dark:bg-amber-950/10'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        {/* Header */}
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center'>
          <Badge variant='outline' className='text-sm font-normal'>
            Pedidos al por mayor
          </Badge>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            Calculadora de Envíos y Descuentos
          </h2>
          <p className='text-muted-foreground text-lg'>
            Calcula el costo total estimado de tu pedido. Descuento automático del 10% en compras de 10 libras o más.
          </p>
        </div>

        {/* Calculadora */}
        <div className='mx-auto max-w-xl bg-white dark:bg-card rounded-2xl shadow-md border p-8 space-y-6'>

          {/* Input libras */}
          <div className='space-y-2'>
            <label className='text-sm font-medium' htmlFor='libras'>
              Cantidad de Libras a Comprar
            </label>
            <input
              id='libras'
              type='number'
              min='1'
              placeholder='Ej: 10'
              value={libras}
              onChange={e => {
                setLibras(e.target.value)
                setResultado(null)
                setDesglose(null)
              }}
              className='w-full rounded-lg border border-input bg-background px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary'
            />
            {parseFloat(libras) >= 10 && (
              <p className='text-xs text-green-600 font-medium'>✓ Aplica descuento del 10% por mayoreo</p>
            )}
          </div>

          {/* Select ciudad */}
          <div className='space-y-2'>
            <label className='text-sm font-medium' htmlFor='ciudad'>
              Ciudad de Destino
            </label>
            <select
              id='ciudad'
              value={ciudadIndex}
              onChange={e => {
                setCiudadIndex(Number(e.target.value))
                setResultado(null)
                setDesglose(null)
              }}
              className='w-full rounded-lg border border-input bg-background px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-primary'
            >
              {ciudades.map((c, i) => (
                <option key={i} value={i}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Botón calcular */}
          <Button
            className='w-full rounded-full text-base'
            onClick={calcular}
          >
            <CalculatorIcon className='size-4' />
            Calcular Total
          </Button>

          {/* Desglose */}
          {desglose && (
            <div className='rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 p-4 space-y-2 text-sm'>
              <div className='flex justify-between text-muted-foreground'>
                <span>Subtotal ({libras} lb × L. {PRECIO_BASE})</span>
                <span>L. {desglose.subtotal.toLocaleString('es-HN')}</span>
              </div>
              {desglose.descuento > 0 && (
                <div className='flex justify-between text-green-600'>
                  <span>Descuento 10% mayoreo</span>
                  <span>- L. {desglose.descuento.toLocaleString('es-HN')}</span>
                </div>
              )}
              <div className='flex justify-between text-muted-foreground'>
                <span className='flex items-center gap-1'>
                  <TruckIcon className='size-3' />
                  {ciudades[ciudadIndex].label.split(' - ')[1]}
                </span>
                <span>{desglose.envio === 0 ? 'Gratis' : `L. ${desglose.envio}`}</span>
              </div>
            </div>
          )}

          {/* Resultado */}
          {resultado && (
            <div className='rounded-xl bg-primary text-primary-foreground p-4 text-center font-semibold text-lg'>
              {resultado}
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default ShippingCalculator
