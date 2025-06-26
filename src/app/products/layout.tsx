import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Expert London Leather',
  description: 'Browse our complete collection of handcrafted leather goods including bags, wallets, and accessories.',
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}