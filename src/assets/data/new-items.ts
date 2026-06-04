// src/assets/data/new-items.ts

export const newItems = [
  {
    img: '/images/ediciones/geisha-copan-2026.webp',
    alt: 'Geisha Copán 2026 - Café de especialidad',
    title: 'Geisha Copán 2026',
    description:
      'La variedad más exclusiva del mundo, cultivada en Copán. Notas de jazmín, té verde y bergamota. Cosecha limitada a solo 100 bolsas numeradas.',
    price: '$39.99',
    stock: '12 disponibles',
    blogLink: '#'
  },
  {
    img: '/images/ediciones/microlote-el-paraiso.webp',
    alt: 'Micro-Lote El Paraíso - Café de origen único',
    title: 'Micro-Lote El Paraíso',
    description:
      'Café de una sola finca ubicada a 1,700 msnm. Notas de durazno, caramelo y nuez moscada. Puntuación SCA: 88 puntos.',
    price: '$24.99',
    stock: 'Agotado',
    blogLink: '#'
  },
  {
    img: '/images/ediciones/navideno-2025.webp',
    alt: 'Edición Navideña 2025 - Café de temporada',
    title: 'Edición Navideña 2025',
    description:
      'Sabores de temporada: canela, naranja y chocolate oscuro. Perfecto para compartir en familia durante las fiestas.',
    price: '$19.99',
    stock: '8 disponibles',
    blogLink: '#'
  }
]

// También puedes agregar una función para obtener solo los que están en stock
export const getAvailableEditions = () => {
  return newItems.filter(item => item.stock !== 'Agotado')
}
