import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const popinsFont = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevTorch',
  description: 'Impulsa tu éxito con nuestros servicios de desarrollo experto. Desde aplicaciones web y móviles hasta tecnologías de vanguardia, convertimos tus ideas en realidad. Únete a nosotros para construir el futuro.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={popinsFont.className}>{children}</body>
    </html>
  )
}
