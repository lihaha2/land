import { theme } from '@/styles/globals'
import { useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  EcoCard,
  EcoCardImage,
  EcoCards,
  EcoContent,
  EcoHeading,
  EcoText,
  EcoWrapper,
} from './styled'

import trophy from '../../../../public/assets/images/icons/trophy.webp'
import animeTrophy from '../../../../public/assets/images/animated/trophy.webp'

import box from '../../../../public/assets/images/icons/box.webp'
import animeBox from '../../../../public/assets/images/animated/box.webp'

import ai from '../../../../public/assets/images/icons/ai.webp'
import animeAi from '../../../../public/assets/images/animated/ai.webp'

import coin from '../../../../public/assets/images/icons/coin.webp'
import animeCoin from '../../../../public/assets/images/animated/coin.webp'

const EcoSection = () => {
  const control = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.8 })
  const [hovers, setHovers] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  })
  const { 0: trophyHov, 1: boxHov, 2: aiHov, 3: coinHov } = hovers

  const changeHover = (i: number, value: boolean) => () =>
    setHovers({ ...hovers, [i]: value })

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <EcoWrapper className="leftPd" id="eco" ref={ref}>
      <EcoContent animate={control}>
        <EcoHeading>
          Disrupting the <br />
          <span color={theme.colors.primary}>Blockchain</span> Gaming <br />
          Ecosystem
        </EcoHeading>
        <EcoText>
          Game creators leverage our powerful SDK to instantly take <br />
          advantage of competitive gaming infrastructure, new <br />
          revenue sources and data science analytics.
          <br />
          <br />
          DisruptionX seamlessly connects Blockchain, Gaming and AI.
        </EcoText>
      </EcoContent>
      <EcoCards>
        <EcoCard
          animate={control}
          transition={{ duration: 1, delay: 0.5 }}
          onMouseEnter={changeHover(0, true)}
          onMouseLeave={changeHover(0, false)}
        >
          <EcoCardImage src={trophyHov ? animeTrophy : trophy} alt="" />
          <h3>
            Competitive <br />
            Gaming
          </h3>
          <p>
            Tournaments, prize pooling, <br />
            wagering
          </p>
        </EcoCard>
        <EcoCard
          animate={control}
          transition={{ duration: 1, delay: 1 }}
          onMouseEnter={changeHover(1, true)}
          onMouseLeave={changeHover(1, false)}
        >
          <EcoCardImage src={boxHov ? animeBox : box} alt="" />
          <h3>
            modular <br />
            sdk
          </h3>
          <p>
            Web3 infrastructure and <br />
            easy implementation
          </p>
        </EcoCard>
        <EcoCard
          animate={control}
          transition={{ duration: 1, delay: 1.5 }}
          onMouseEnter={changeHover(2, true)}
          onMouseLeave={changeHover(2, false)}
        >
          <EcoCardImage src={aiHov ? animeAi : ai} alt="" />
          <h3>dx ai tool</h3>
          <p>
            Smarter games, staying <br />
            ahead of trends
          </p>
        </EcoCard>
        <EcoCard
          animate={control}
          transition={{ duration: 1, delay: 2 }}
          onMouseEnter={changeHover(3, true)}
          onMouseLeave={changeHover(3, false)}
        >
          <EcoCardImage src={coinHov ? animeCoin : coin} alt="" />
          <h3>revenue</h3>
          <p>
            Smarter games, staying <br />
            ahead of trends
          </p>
        </EcoCard>
      </EcoCards>
    </EcoWrapper>
  )
}

export default EcoSection
