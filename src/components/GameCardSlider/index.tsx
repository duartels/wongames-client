'use client'
import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight
} from 'styled-icons/material-outlined'

import { GameCard, GameCardProps } from '../GameCard'
import Slider, { SliderSettings } from '../Slider'
import * as S from './styles'

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        slidesToShow: 3.2,
        arrows: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.2,
        arrows: false
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1.2,
        arrows: false
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1.1,
        arrows: false
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next games" />,
  prevArrow: <ArrowLeft aria-label="previous games" />
}

export const GameCardSlider = ({
  items,
  color = 'black'
}: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <GameCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)
