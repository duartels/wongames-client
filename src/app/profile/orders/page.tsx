import { OrdersList } from '@/components/OrdersList'
import { mockOrdersList } from '@/components/OrdersList/mock'
import { Profile } from '@/templates/Profile'

export default async function ProfileOrders() {
  async function getProps() {
    return {
      items: mockOrdersList
    }
  }

  const props = await getProps()

  return (
    <Profile>
      <OrdersList {...props} />
    </Profile>
  )
}
