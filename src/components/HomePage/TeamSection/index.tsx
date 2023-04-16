import {
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlideButton,
} from '@/components/common/Carousel'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { slides } from './slides'
import {
  TeamWrapper,
  TeamSlideWrapper,
  TeamSlideButtons,
  TeamBackground,
  TeamSlideComponent,
} from './styled'

const carouselVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: 300, opacity: 0 },
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const TeamSection = () => {
  const formattedSlides = useMemo(() => {
    const _formattedSlides = []
    for (let i = 0; i < parseInt(slides.length / 4 + 1 + ''); i++) {
      _formattedSlides.push(slides.slice(i * 4, i * 4 + 4))
    }
    return _formattedSlides
  }, [])

  const [slide, setSlide] = useState(formattedSlides[0])
  const [[page, direction], setPage] = useState([0, 0])
  const control = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.8 })

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  const handleClick = (_slide: typeof formattedSlides[0]) => () => {
    if (_slide[0].id > slide[0].id) paginate(1)
    else paginate(-1)
    setSlide(_slide)
  }

  const handlePrev = () => {
    const currentSlide = formattedSlides.findIndex(
      (el) => el[0].id === slide[0].id
    )
    const maybeSlide = formattedSlides[currentSlide - 1]
    paginate(-1)
    if (typeof maybeSlide === 'undefined')
      return setSlide(formattedSlides[formattedSlides.length - 1])

    return setSlide(maybeSlide)
  }

  const handleNext = () => {
    const currentSlide = formattedSlides.findIndex(
      (el) => el[0].id === slide[0].id
    )
    const maybeSlide = formattedSlides[currentSlide + 1]
    paginate(1)
    if (typeof maybeSlide === 'undefined') return setSlide(formattedSlides[0])

    return setSlide(maybeSlide)
  }

  return (
    <TeamBackground>
      <TeamWrapper
        ref={ref}
        animate={control}
        variants={carouselVariants}
        initial="hidden"
        transition={{ duration: 0.5 }}
      >
        <CarouselPrevButton onClick={handlePrev} />
        <TeamSlideWrapper>
          <h3>
            Background of <span>Team & Advisors</span>
          </h3>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div style={{ overflow: 'hidden', width: '100%' }}>
              <TeamSlideComponent
                key={slide[0].id}
                ref={ref}
                custom={direction}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    handleNext()
                  } else if (swipe > swipeConfidenceThreshold) {
                    handlePrev()
                  }
                }}
              >
                {slide.map((el) => (
                  <Image
                    key={el.id}
                    alt=""
                    width={175}
                    height={120}
                    src={el.img}
                    style={{ pointerEvents: 'none' }}
                  />
                ))}
              </TeamSlideComponent>
            </motion.div>
          </AnimatePresence>

          <TeamSlideButtons>
            {formattedSlides.map((el, key) => (
              <CarouselSlideButton
                key={key}
                isActive={el[0].id === slide[0].id}
                onClick={handleClick(el)}
              />
            ))}
          </TeamSlideButtons>
        </TeamSlideWrapper>
        <CarouselNextButton onClick={handleNext} />
      </TeamWrapper>
    </TeamBackground>
  )
}

export default TeamSection
