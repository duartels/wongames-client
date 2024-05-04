import { mockGameCardSlider } from '@/components/GameCardSlider/mock'
import { mockHighlight } from '@/components/Highlight/mock'
import { Wishlist as WishlistTemplate } from '@/templates/Wishlist'

export default async function Wishlist() {
  async function getProps() {
    return {
      games: mockGameCardSlider,
      recommendedHighlight: mockHighlight,
      recommendedGames: [...mockGameCardSlider]
    }
  }

  const props = await getProps()

  return <WishlistTemplate {...props} />
}
