import { mockExploresiderbarFilters } from '@/components/ExploreSidebar/mock'
import { QUERY_GAMES } from '@/graphql/queries/games'
import { getClient } from '@/lib/client'
import { GamesTemplate } from '@/templates/Games'

export default async function Games() {
  async function getProps() {
    const { data } = await getClient().query({
      query: QUERY_GAMES,
      variables: {
        pagination: {
          limit: 9
        }
      }
    })

    const games = data.games?.data.map((game) => ({
      title: game!.attributes!.name,
      slug: game!.attributes!.slug || '',
      developer: game!.attributes!.developers!.data[0]!.attributes!.name,
      img: `http://localhost:1337${game!.attributes!.cover!.data!.attributes!.url}`,
      price: new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD'
      }).format(game!.attributes!.price)
    }))

    return {
      games,
      filterItems: mockExploresiderbarFilters
    }
  }

  const props = await getProps()

  return <GamesTemplate {...props} />
}
