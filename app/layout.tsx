import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Source_Serif_4 } from 'next/font/google'
import { yearsOfExperience } from '@/lib/experience'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const serif = Source_Serif_4({ subsets: ['latin'], variable: '--font-serif-display' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const description =
  `Senior Data Architect and Principal Data Engineer with ${yearsOfExperience()}+ years of experience in enterprise data platforms, Databricks, and AI-enabled data modernisation.`

export const metadata: Metadata = {
  title: 'Masthan Mohammed | Senior Data Architect',
  description,
  authors: [{ name: 'Masthan Mohammed' }],
  keywords: ['Data Architect', 'Databricks', 'Data Engineering', 'Data Governance', 'London'],
  openGraph: {
    title: 'Masthan Mohammed | Senior Data Architect',
    description,
    type: 'website',
    locale: 'en_GB',
  },
  icons: {
    icon: [
      {
        url: `${basePath}/icon-light-32x32.png`,
        media: '(prefers-color-scheme: light)',
      },
      {
        url: `${basePath}/icon-dark-32x32.png`,
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: `${basePath}/icon.svg`,
        type: 'image/svg+xml',
      },
    ],
    apple: `${basePath}/apple-icon.png`,
  },
}

export const viewport: Viewport = {
  themeColor: '#0f1d3a',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${geistSans.variable} ${geistMono.variable} ${serif.variable}`}
    >
      <body className="font-sans antialiased">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
