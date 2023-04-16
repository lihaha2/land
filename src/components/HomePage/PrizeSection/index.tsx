import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  CustomParalax,
  FhirdCard,
  FirstCard,
  PrizeContent,
  PrizeWrapper,
  SecondCard,
} from './styled'

const PrizeSection = () => {
  const control = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.8 })

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <PrizeWrapper ref={ref} id="features">
      <CustomParalax
        renderLayer={(percentage) => (
          <>
            <FirstCard scrolly={percentage} />
            <SecondCard scrolly={percentage} />
            <FhirdCard scrolly={percentage} />
          </>
        )}
      />
      <PrizeContent animate={control}>
        <h2>
          PRIZE POOL <br />
          <span>GAMING</span>
        </h2>
        <p>
          Fully integrated PvP prize pooling and <br />
          tournament structures create a more exciting <br />
          competitive gaming environment with more <br />
          sustainable risk-to-earn incentive structures
        </p>
      </PrizeContent>
    </PrizeWrapper>
  )
}

export default PrizeSection
