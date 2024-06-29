import { mockExploresiderbarFilters } from '@/components/ExploreSidebar/mock'
import { mockGameCardSlider } from '@/components/GameCardSlider/mock'
import { GamesTemplate } from '@/templates/Games'

export default async function Games() {
  async function getProps() {
    return {
      games: mockGameCardSlider,
      filterItems: mockExploresiderbarFilters
    }
  }

  const props = await getProps()

  return <GamesTemplate {...props} />
}
