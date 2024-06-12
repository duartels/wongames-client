import { CardsList } from '@/components/CardsList'
import { mockPaymentOptions } from '@/components/PaymentOptions/mock'
import { Profile } from '@/templates/Profile'

export default async function ProfileCards() {
  async function getProps() {
    return {
      cards: mockPaymentOptions.cards
    }
  }

  const props = await getProps()

  return (
    <Profile>
      <CardsList {...props} />
    </Profile>
  )
}
