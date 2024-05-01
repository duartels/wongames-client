import { mockGallery } from '@/components/Gallery/mock'
import { mockGameCardSlider } from '@/components/GameCardSlider/mock'
import { gameDetailsMock } from '@/components/GameDetails/mock'
import { mockGameInfo } from '@/components/GameInfo/mock'
import { mockHighlight } from '@/components/Highlight/mock'

export const mockGameTemplate = {
  cover:
    'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
  gameInfo: mockGameInfo,
  description: '<h1>Custom HTML</h1>',
  gallery: [...mockGallery],
  details: gameDetailsMock,
  upcomingGames: [...mockGameCardSlider],
  upcomingHighlight: mockHighlight,
  recommendedGames: [...mockGameCardSlider]
}
