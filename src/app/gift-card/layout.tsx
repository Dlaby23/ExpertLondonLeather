import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gift Cards - Expert London Leather',
  description: 'Give the gift of exceptional craftsmanship with Expert London Leather gift cards. Perfect for leather goods enthusiasts.',
}

export default function GiftCardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}