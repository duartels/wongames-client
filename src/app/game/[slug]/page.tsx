import { notFound } from 'next/navigation'

import { mockGameCardSlider } from '@/components/GameCardSlider/mock'
import { TPlatform, TRating } from '@/components/GameDetails'
import { mockHighlight } from '@/components/Highlight/mock'
import { QUERY_GAME_BY_SLUG, QUERY_GAMES } from '@/graphql/queries/games'
import { getClient } from '@/lib/client'
import { Game as GameTemplate } from '@/templates/Game'

export async function generateStaticParams() {
  const { data } = await getClient().query({
    query: QUERY_GAMES,
    variables: {
      pagination: {
        limit: 9
      }
    }
  })

  return data?.games?.data.map(({ attributes }) => ({
    params: { slug: attributes!.slug }
  }))
}

export default async function Game({
  params: { slug }
}: {
  params: { slug: string }
}) {
  async function getProps() {
    const { data } = await getClient().query({
      query: QUERY_GAME_BY_SLUG,
      variables: { slug }
    })

    if (!data.games?.data.length) {
      return notFound()
    }

    const game = data.games.data[0].attributes

    return {
      cover: `http://localhost:1337${game!.cover!.data!.attributes!.src}`,
      gameInfo: {
        title: game!.name,
        price: game!.price,
        description: game!.short_description || ''
      },
      gallery: game!.gallery?.data.map((image) => ({
        src: `http://localhost:1337${image!.attributes!.src}`,
        label: image!.attributes!.label || ''
      })),
      description: game!.description || '',
      details: {
        developer: game!.developers?.data[0]?.attributes?.name || '',
        releaseDate: game!.release_date,
        rating: game!.rating as TRating,
        platforms:
          game!.platforms?.data.map(
            (platform) => platform!.attributes!.name as TPlatform
          ) || [],
        publisher: game!.publisher?.data?.attributes?.name || '',
        genres:
          game?.categories?.data.map(
            (category) => category!.attributes!.name
          ) || []
      },
      upcomingGames: [...mockGameCardSlider],
      upcomingHighlight: mockHighlight,
      recommendedGames: [...mockGameCardSlider]
    }
  }

  const props = await getProps()

  return <GameTemplate {...props} />
}
