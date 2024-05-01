import { Game as GameTemplate } from '@/templates/Game'

export async function generateStaticParams() {
  //const posts = await fetch('https://.../posts').then((res) => res.json())

  return [{ slug: 'cyberpunk-2077' }]
}

export default async function Game() {
  async function getCover() {
    return 'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg'
  }

  const cover = await getCover()

  return <GameTemplate cover={cover} />
}
