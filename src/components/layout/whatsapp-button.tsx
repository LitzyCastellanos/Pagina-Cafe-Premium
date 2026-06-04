import { MessageCircleIcon } from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/50498765432?text=Hola,%20quiero%20cotizar%20un%20pedido'

const WhatsappButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target='_blank'
      rel='noopener noreferrer'
      className='fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105'
    >
      <MessageCircleIcon className='size-5' />
      <span className='text-sm font-medium'>Cotizar por WhatsApp</span>
    </a>
  )
}

export default WhatsappButton
