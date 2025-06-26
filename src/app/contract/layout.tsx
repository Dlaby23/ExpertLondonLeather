import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions - Expert London Leather',
  description: 'Read our terms and conditions for purchasing and using Expert London Leather products and services.',
}

export default function ContractLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}