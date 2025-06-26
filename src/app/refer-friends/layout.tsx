import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refer Friends & Earn Rewards - Expert London Leather',
  description: 'Share Expert London Leather with friends and earn £25 store credit for each successful referral. Your friends get 15% off their first order.',
}

export default function ReferFriendsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}