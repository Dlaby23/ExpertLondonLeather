import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Expert London Leather',
  description: 'Get in touch with Expert London Leather. Visit our workshop, call us, or send a message for inquiries about our handcrafted leather goods.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}