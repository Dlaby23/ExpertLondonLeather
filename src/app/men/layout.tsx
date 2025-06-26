import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Men\'s Collection - Expert London Leather',
  description: 'Discover our premium men\'s leather goods collection. From business briefcases to casual bags, each piece is handcrafted for the modern gentleman.',
}

export default function MenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}