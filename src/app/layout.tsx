import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Codeflix',
  description: 'Tenha acesso ao melhores conteúdos de programação de uma forma simples e fácil',
}

export default function RootLayout( {children}: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
        <meta property='og:title' content='codeflix' key="title" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
