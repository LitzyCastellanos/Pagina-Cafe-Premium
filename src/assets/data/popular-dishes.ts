// src/assets/data/popular-dishes.ts

export type CafeProduct = {
  imgUrl: string
  nombre: string
  tueste: string
  precio: string
  detalles: {
    altura: string
    notaCata: string
    proceso: string
  }
  exclusivo?: boolean
  precioAnterior?: string
  badge?: 'EXCLUSIVO' | 'COSECHA PREMIUM'
}

export const granos: CafeProduct[] = [
  {
    imgUrl: '/images/granos/copan-reserva.png',
    nombre: 'Café Excelso Copán',
    tueste: 'Tueste Medio',
    precio: 'L. 180 la libra',
    detalles: {
      altura: '1,500 msnm',
      notaCata: 'Chocolate, caramelo y naranja',
      proceso: 'Lavado'
    }
  },
  {
    imgUrl: '/images/granos/honduras-honey.png',
    nombre: 'Honduras Honey',
    tueste: 'Tueste Claro',
    precio: 'L. 160 la libra',
    detalles: {
      altura: '1,400 msnm',
      notaCata: 'Miel, frutas rojas y panela',
      proceso: 'Natural'
    }
  },
  {
    imgUrl: '/images/granos/bourbon-copan.png',
    nombre: 'Café Variedad Bourbon',
    tueste: 'Tueste Medio',
    precio: 'L. 200 la libra',
    detalles: {
      altura: '1,600 msnm',
      notaCata: 'Nuez, cacao y vainilla',
      proceso: 'Lavado'
    }
  },
  {
    imgUrl: '/images/granos/organico.png',
    nombre: 'Café Orgánico',
    tueste: 'Tueste Oscuro',
    precio: 'L. 190 la libra',
    detalles: {
      altura: '1,450 msnm',
      notaCata: 'Tierra, tabaco y chocolate oscuro',
      proceso: 'Natural'
    }
  },
  {
    imgUrl: '/images/granos/reserva-patron.png',
    nombre: 'Reserva del Patrón',
    tueste: 'Tueste Medio',
    precio: 'L. 220 la libra',
    detalles: {
      altura: '1,700 msnm',
      notaCata: 'Durazno, caramelo y nuez moscada',
      proceso: 'Lavado'
    }
  },
  {
    imgUrl: '/images/granos/tipica.png',
    nombre: 'Variedad Típica',
    tueste: 'Tueste Claro',
    precio: 'L. 150 la libra',
    detalles: {
      altura: '1,350 msnm',
      notaCata: 'Cítricos, miel y almendra',
      proceso: 'Lavado'
    }
  },
  {
    imgUrl: '/images/granos/caturra.png',
    nombre: 'Caturra de Altura',
    tueste: 'Tueste Medio',
    precio: 'L. 170 la libra',
    detalles: {
      altura: '1,550 msnm',
      notaCata: 'Manzana verde, panela y canela',
      proceso: 'Natural'
    }
  }
]

export const moliendas: CafeProduct[] = [
  {
    imgUrl: '/images/moliendas/espresso.png',
    nombre: 'Molienda Fina Espresso',
    tueste: 'Tueste Oscuro',
    precio: 'L. 185 la libra',
    detalles: {
      altura: '1,500 msnm',
      notaCata: 'Chocolate amargo, toffee',
      proceso: 'Lavado'
    }
  },
  {
    imgUrl: '/images/moliendas/prensa-francesa.png',
    nombre: 'Grano Entero Prensa Francesa',
    tueste: 'Tueste Medio',
    precio: 'L. 175 la libra',
    detalles: {
      altura: '1,480 msnm',
      notaCata: 'Caramelo, nuez y frutos secos',
      proceso: 'Natural'
    }
  },
  {
    imgUrl: '/images/moliendas/chemex.png',
    nombre: 'Molienda Media Chemex',
    tueste: 'Tueste Claro',
    precio: 'L. 180 la libra',
    detalles: {
      altura: '1,600 msnm',
      notaCata: 'Floral, bergamota y té negro',
      proceso: 'Lavado'
    }
  },
  {
    imgUrl: '/images/moliendas/cold-brew.png',
    nombre: 'Grano Grueso Cold Brew',
    tueste: 'Tueste Oscuro',
    precio: 'L. 190 la libra',
    detalles: {
      altura: '1,400 msnm',
      notaCata: 'Chocolate, vainilla y tabaco',
      proceso: 'Natural'
    }
  },
  {
    imgUrl: '/images/moliendas/aeropress.png',
    nombre: 'Molienda Aeropress',
    tueste: 'Tueste Medio',
    precio: 'L. 178 la libra',
    detalles: {
      altura: '1,520 msnm',
      notaCata: 'Frutas tropicales y miel',
      proceso: 'Lavado'
    }
  }
]

export const edicionesEspeciales: CafeProduct[] = [
  {
    imgUrl: '/images/ediciones/geisha-copan.png',
    nombre: 'Geisha Copán 2026',
    tueste: 'Tueste Claro',
    precio: 'L. 950 la libra',
    precioAnterior: 'L. 1,200 la libra',
    badge: 'EXCLUSIVO',
    exclusivo: true,
    detalles: {
      altura: '1,800 msnm',
      notaCata: 'Jazmín, té verde y bergamota',
      proceso: 'Lavado'
    }
  },
  {
    imgUrl: '/images/ediciones/micro-lote.png',
    nombre: 'Micro-Lote El Paraíso',
    tueste: 'Tueste Medio',
    precio: 'L. 580 la libra',
    precioAnterior: 'L. 750 la libra',
    badge: 'COSECHA PREMIUM',
    exclusivo: true,
    detalles: {
      altura: '1,700 msnm',
      notaCata: 'Durazno, caramelo y nuez moscada',
      proceso: 'Natural'
    }
  },
  {
    imgUrl: '/images/ediciones/navideno.png',
    nombre: 'Edición Navideña 2025',
    tueste: 'Tueste Oscuro',
    precio: 'L. 420 la libra',
    precioAnterior: 'L. 550 la libra',
    badge: 'COSECHA PREMIUM',
    exclusivo: true,
    detalles: {
      altura: '1,600 msnm',
      notaCata: 'Canela, naranja y chocolate oscuro',
      proceso: 'Natural'
    }
  }
]

export const popularDishes: CafeProduct[] = [...granos, ...moliendas]
