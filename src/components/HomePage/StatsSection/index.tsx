import { useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-parallax'
import {
  StatsWrapper,
  StatsContent,
  FirstCard,
  SecondCard,
  FhirdCard,
} from './styled'

const StatsSection = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <StatsWrapper ref={ref} className="leftPd">
      <StatsContent animate={control}>
        <h2>
          powered by
          <span> ai</span>
        </h2>
        <p>
          Developers can use DX&apos;as AI Tool and Data Science Hub <br />
          to checkpoint features of their games for analysis, <br />
          understand user behavior, create powerful machine <br />
          learning models and integrate the results for dynamic
        </p>
      </StatsContent>
      <Parallax
        className="statsParalax"
        style={{ overflow: 'initial' }}
        renderLayer={(percentage) => (
          <>
            <FirstCard scrolly={percentage} />
            <SecondCard scrolly={percentage} />
            <FhirdCard scrolly={percentage} />
          </>
        )}
      />
    </StatsWrapper>
  )
}

export default StatsSection
