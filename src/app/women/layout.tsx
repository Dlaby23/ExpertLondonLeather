import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Women\'s Collection - Expert London Leather',
  description: 'Discover our elegant women\'s leather goods collection. From sophisticated handbags to evening clutches, each piece embodies timeless style.',
}

export default function WomenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}