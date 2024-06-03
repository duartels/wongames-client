import { mockCartList } from '@/components/CartList/mock'
import { mockGameCardSlider } from '@/components/GameCardSlider/mock'
import { mockHighlight } from '@/components/Highlight/mock'
import { mockPaymentOptions } from '@/components/PaymentOptions/mock'
import { Cart as CartTemplate } from '@/templates/Cart'

export default async function Cart() {
  async function getProps() {
    return {
      recommendedHighlight: mockHighlight,
      recommendedGames: [...mockGameCardSlider],
      items: mockCartList,
      total: '$ 399.80',
      cards: mockPaymentOptions.cards
    }
  }

  const props = await getProps()

  return <CartTemplate {...props} />
}
