import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Groups - Expert London Leather',
  description: 'Join our vibrant community groups to connect with leather enthusiasts, share experiences, and learn from experts.',
}

export default function GroupsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}