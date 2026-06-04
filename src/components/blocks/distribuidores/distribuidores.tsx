'use client'

import { Badge } from '@/components/ui/badge'
import { CheckCircleIcon } from 'lucide-react'

const requisitos = [
  'Copia de RTN de la empresa o comerciante individual.',
  'Permiso de Operación Vigente.',
  'Volumen mínimo de compra mensual (20 libras).',
  'Dirección exacta de entrega del establecimiento.',
  'Contacto del encargado de compras.'
]

const Distribuidores = () => {
  return (
    <section id='distribuidores' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        {/* Header */}
        <div className='mx-auto mb-12 flex max-w-2xl flex-col items-center justify-center space-y-4 text-center'>
          <Badge variant='outline' className='text-sm font-normal'>
            Distribuidores
          </Badge>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            Requisitos para Distribuidores Autorizados
          </h2>
          <p className='text-muted-foreground text-lg'>
            ¿Eres cafetería aliada o distribuidor? Estos son los documentos y condiciones necesarios para registrarte con nosotros.
          </p>
        </div>

        {/* Lista de requisitos */}
        <div className='mx-auto max-w-xl bg-white dark:bg-card rounded-2xl shadow-md border p-8 space-y-4'>
          {requisitos.map((req, index) => (
            <div key={index} className='flex items-start gap-3'>
              <CheckCircleIcon className='size-5 text-primary mt-0.5 flex-shrink-0' />
              <p className='text-base text-foreground'>{req}</p>
            </div>
          ))}

          <div className='pt-4 border-t text-center'>
            <p className='text-sm text-muted-foreground mb-4'>
              ¿Listo para registrarte? Contáctanos por WhatsApp con tus documentos.
            </p>
            <a
              href='https://wa.me/50498765432?text=Hola,%20quiero%20registrarme%20como%20distribuidor%20autorizado'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity'
            >
              Iniciar Registro por WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Distribuidores
