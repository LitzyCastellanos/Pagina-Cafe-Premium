'use client'

import { useState } from 'react'
import { CheckIcon, CoffeeIcon, CalendarIcon, TruckIcon, CreditCardIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
  {
    name: 'Básico',
    price: '$14.99',
    frecuency: 'mes',
    description: 'Para el cafetero ocasional',
    includes: [
      '1 bolsa de 340g al mes',
      'Elige entre 3 variedades',
      'Envío incluido',
      'Cancelas cuando quieras'
    ],
    recommended: false
  },
  {
    name: 'Premium',
    price: '$27.99',
    frecuency: 'mes',
    description: 'El favorito de nuestros clientes',
    includes: [
      '2 bolsas de 340g al mes',
      'Acceso a ediciones especiales',
      'Envío prioritario',
      'Descuento 10% en productos adicionales',
      'Cancelas cuando quieras'
    ],
    recommended: true
  },
  {
    name: 'Familiar',
    price: '$39.99',
    frecuency: 'mes',
    description: 'Para toda la casa u oficina',
    includes: [
      '3 bolsas de 340g al mes',
      'Elige entre todas las variedades',
      'Incluye molienda personalizada',
      'Envío express',
      'Descuento 15%',
      'Cancelas cuando quieras'
    ],
    recommended: false
  }
]

const SubscriptionSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName)

    // Solo muestra un mensaje o hace scroll, sin redirigir
    setTimeout(() => {
      alert(`¡Has seleccionado el plan ${planName}! Contáctanos para completar tu suscripción.`)
    }, 100)
  }

  return (
    <section id="suscripcion" className="py-16 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <CoffeeIcon className="size-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Suscripción Cafetera</h2>
          <p className="text-muted-foreground">
            Recibe café fresco cada mes en tu casa. Tueste cada semana, envío asegurado y
            la flexibilidad de cambiar tu plan cuando quieras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 relative bg-card text-card-foreground transition-all duration-300 ${
                plan.recommended ? 'border-primary shadow-lg scale-105' : ''
              } ${selectedPlan === plan.name ? 'ring-2 ring-primary ring-offset-2' : ''}`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  Más popular
                </span>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.frecuency}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <CheckIcon className="size-4 text-green-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full rounded-full"
                variant={plan.recommended ? 'default' : 'outline'}
                onClick={() => handleSelectPlan(plan.name)}
              >
                {selectedPlan === plan.name ? '✓ Plan seleccionado' : 'Seleccionar plan'}
              </Button>
            </div>
          ))}
        </div>

        {/* Mensaje cuando se selecciona un plan */}
        {selectedPlan && (
          <div className="mt-8 p-4 bg-primary/10 rounded-lg text-center">
            <p className="text-primary">
              Has seleccionado el plan <strong>{selectedPlan}</strong>.
              Para más información, contáctanos.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="size-4" />
              <span>Envíos cada 30 días</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TruckIcon className="size-4" />
              <span>Envío a todo Honduras</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CreditCardIcon className="size-4" />
              <span>Pago seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscriptionSection
