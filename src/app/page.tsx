import { gql } from '@apollo/client'

import { mockBannerSlider } from '@/components/BannerSlider/mock'
import { mockGameCardSlider } from '@/components/GameCardSlider/mock'
import { mockHighlight } from '@/components/Highlight/mock'
import { getClient } from '@/lib/client'
import { Home, HomeTemplateProps } from '@/templates/Home'

async function getData() {
  const data: HomeTemplateProps = {
    banners: mockBannerSlider,
    newGames: mockGameCardSlider,
    mostPopularHighlight: mockHighlight,
    mostPopularGames: mockGameCardSlider,
    upcomingGames: mockGameCardSlider,
    upcomingHighlight: mockHighlight,
    upcomingMoreGames: mockGameCardSlider,
    freeGames: mockGameCardSlider,
    freeHighlight: mockHighlight
  }

  return data
}

export default async function Index() {
  const client = getClient()
  const { data: dataQuery } = await client.query({
    query: gql`
      query GetGames {
        games {
          data {
            attributes {
              name
            }
          }
        }
      }
    `
  })

  console.log(dataQuery.games.data)

  const data = await getData()

  return <Home {...data} />
}
