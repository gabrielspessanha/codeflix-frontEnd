import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'

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
        <script src="https://jsuites.net/v4/jsuites.js"></script>
        <meta property='og:title' content='codeflix' key="title" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
