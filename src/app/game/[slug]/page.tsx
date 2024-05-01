import { Game as GameTemplate } from '@/templates/Game'

export async function generateStaticParams() {
  //const posts = await fetch('https://.../posts').then((res) => res.json())

  return [{ slug: 'cyberpunk-2077' }]
}

export default async function Game() {
  async function getProps() {
    return {
      cover:
        'https://images.gog-statics.com/5643a7c831df452d29005caeca24c28cdbfaa6fbea5a9556b147ee26d325fa70_bg_crop_1366x655.jpg',
      gameInfo: {
        title: 'Cyberpunk 2077',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware, skillset and playstyle, and explore a vast city where the choices you make shape the story and the world around you.',
        price: '200.00'
      }
    }
  }

  const props = await getProps()

  return <GameTemplate cover={props.cover} gameInfo={props.gameInfo} />
}
