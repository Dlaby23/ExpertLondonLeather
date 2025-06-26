import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Collection - Expert London Leather',
  description: 'Browse our premium collection with detailed product specifications, customer reviews, and advanced viewing options.',
}

export default function Shop1Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}