import { FacebookIcon, InstagramIcon, PhoneIcon, MapPinIcon } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import BistroLogo from '@/assets/svg/bistro-logo'
import { footerData, footerContact } from '@/assets/data/footer'

const Footer = () => {
  return (
    <footer className='bg-muted' style={{ clipPath: 'polygon(0 16px, 100% 0, 100% 100%, 0 100%)' }}>
      <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6'>
        <div className='flex flex-wrap justify-between gap-8'>

          {/* Logo + contacto */}
          <div className='flex flex-col gap-3'>
            <a href='/#inicio' className='flex items-center gap-3'>
              <BistroLogo />
              <span className='text-primary text-[20px] font-semibold'>Café Premium Copán</span>
            </a>
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              <MapPinIcon className='size-4 text-primary' />
              <span>{footerContact.address}</span>
            </div>
            <div className='flex items-center gap-2 text-sm text-muted-foreground'>
              <PhoneIcon className='size-4 text-primary' />
              <span>Tel: {footerContact.phone} · {footerContact.schedule}</span>
            </div>
          </div>

          {/* Navegación */}
          <div className='flex flex-col gap-2'>
            <p className='font-semibold text-sm mb-1'>Navegación</p>
            {footerData.map(item => (
              <a
                key={item.title}
                href={item.href}
                className='text-muted-foreground hover:text-primary text-sm'
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Redes sociales */}
          <div className='flex flex-col gap-3'>
            <p className='font-semibold text-sm'>Síguenos</p>
            <a
              href='https://facebook.com/cafepremiumcopan'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-sm text-muted-foreground hover:text-primary'
            >
              <FacebookIcon className='size-5' />
              Facebook
            </a>
            <a
              href='https://instagram.com/cafepremiumcopan'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-sm text-muted-foreground hover:text-primary'
            >
              <InstagramIcon className='size-5' />
              Instagram
            </a>
          </div>

        </div>
      </div>

      <Separator />

      <div className='mx-auto flex max-w-7xl justify-center px-4 py-6 sm:px-6'>
        <p className='text-muted-foreground text-center text-sm'>
          {`©${new Date().getFullYear()}`}{' '}
          <a href='/#inicio' className='hover:underline font-medium'>
            Café Premium Copán
          </a>
          {' · '}Barrio El Centro, Santa Rosa de Copán · Tel: {footerContact.phone}
        </p>
      </div>
    </footer>
  )
}

export default Footer
