/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useRef, useState } from 'react'
import SlickSlider from 'react-slick'
import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight,
  Close
} from 'styled-icons/material-outlined'

import Slider, { SliderSettings } from '../Slider'
import * as S from './styles'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const commonSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        slidesToShow: 3.2,
        arrows: false,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2.2,
        arrows: false,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.2,
        arrows: false,
        draggable: true
      }
    }
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

export const Gallery = ({ items }: GalleryProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const slider = useRef<SlickSlider>(null)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <img
            key={`thumb-${index}`}
            role="button"
            src={item.src}
            alt={`Thumb - ${item.label}`}
            onClick={() => {
              setIsOpen(true)
              slider.current!.slickGoTo(index)
            }}
          />
        ))}
      </Slider>

      <S.Modal aria-label="modal" aria-hidden={!isOpen} $isOpen={isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>

        <S.ModalContent>
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <img key={`gallery-${index}`} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </S.ModalContent>
      </S.Modal>
    </S.Wrapper>
  )
}
