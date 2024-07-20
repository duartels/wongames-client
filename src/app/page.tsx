import { mockGameCardSlider } from '@/components/GameCardSlider/mock'
import { mockHighlight } from '@/components/Highlight/mock'
import { RibbonColors, RibbonSizes } from '@/components/Ribbon'
import { QUERY_HOME } from '@/graphql/queries/home'
import { getClient } from '@/lib/client'
import { Home, HomeTemplateProps } from '@/templates/Home'

async function getProps() {
  const { data } = await getClient().query({
    query: QUERY_HOME
  })

  const banners =
    data.banners?.data.map((banner) => ({
      img: `http://localhost:1337${banner?.attributes?.image.data?.attributes?.url}`,
      title: banner!.attributes!.title,
      subtitle: banner!.attributes!.subtitle,
      buttonLabel: banner!.attributes!.button!.label,
      buttonLink: banner!.attributes!.button!.link,
      ribbon: banner?.attributes?.ribbon?.text,
      ...(banner!.attributes!.ribbon && {
        ribbonSize: banner!.attributes!.ribbon!.size as RibbonSizes,
        ribbonColor: banner!.attributes!.ribbon!.color as RibbonColors
      })
    })) || []

  const props: HomeTemplateProps = {
    banners: banners,
    newGames: mockGameCardSlider,
    mostPopularHighlight: mockHighlight,
    mostPopularGames: mockGameCardSlider,
    upcomingGames: mockGameCardSlider,
    upcomingHighlight: mockHighlight,
    upcomingMoreGames: mockGameCardSlider,
    freeGames: mockGameCardSlider,
    freeHighlight: mockHighlight
  }

  return props
}

export default async function Index() {
  const data = await getProps()

  return <Home {...data} />
}
