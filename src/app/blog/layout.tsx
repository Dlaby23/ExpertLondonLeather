import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Leather Journal - Expert London Leather Blog',
  description: 'Insights, stories, and expertise from the world of premium leather craftsmanship. Learn about care, sustainability, and the art of leatherworking.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}