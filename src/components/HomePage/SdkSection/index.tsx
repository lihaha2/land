import { CarouselSlideButton } from '@/components/common/Carousel'
import { AnimatePresence, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { slides } from './slides'
import {
  SdkContainer,
  SdkContentWrapper,
  SdkCube,
  SdkNextButton,
  SdkSlideButtons,
  SdkSlideWrapper,
  SdkWrapper,
} from './styled'

const SdkSection = () => {
  const [slide, setSlide] = useState(slides[0])
  const control = useAnimation()
  const slideControl = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.8 })

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  useEffect(() => {
    slideControl.start('change')
  }, [slide, slideControl])

  const handleClick = (_slide: typeof slide) => () => setSlide(_slide)

  const handleNext = () => {
    const currentSlide = slides.findIndex((el) => el.id === slide.id)
    const maybeSlide = slides[currentSlide + 1]

    if (typeof maybeSlide === 'undefined') return setSlide(slides[0])

    return setSlide(maybeSlide)
  }

  return (
    <SdkContainer ref={ref} animate={control}>
      <SdkWrapper>
        <AnimatePresence>
          <SdkCube key={slide.imgSrc.src} src={slide.imgSrc} alt="" />
        </AnimatePresence>

        <AnimatePresence>
          <SdkContentWrapper>
            <SdkSlideWrapper key={slide.id}>
              <h2>{slide.title}</h2>
              <p style={{ maxWidth: slide.textWidth }}>{slide.description}</p>
            </SdkSlideWrapper>
          </SdkContentWrapper>
        </AnimatePresence>

        <SdkSlideButtons>
          {slides.map((el, key) => (
            <CarouselSlideButton
              key={key}
              isActive={el.id === slide.id}
              onClick={handleClick(el)}
            />
          ))}
        </SdkSlideButtons>
        <SdkNextButton onClick={handleNext} />
      </SdkWrapper>
    </SdkContainer>
  )
}

export default SdkSection
