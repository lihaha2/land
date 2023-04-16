import { useScroll } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  ActiveRoadStroke,
  RoadContent,
  RoadStroke,
  RoadStrokeDot,
  RoadWrapper,
} from './styled'

const RoadmapSection = () => {
  const ref = useRef(null)
  const [scroll, setScroll] = useState(0)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  })

  scrollYProgress.on('change', (val) => setScroll(val))

  const isFirstActive = scroll > 0.1
  const isSecondActive = scroll > 0.35
  const isFhirdActive = scroll > 0.65
  const isFourActive = scroll > 0.9
  return (
    <RoadWrapper id="road">
      <h2>roadmap</h2>
      <RoadContent>
        <div id={!isFirstActive ? 'notActive' : ''}>
          <h3>Q3-4 2022</h3>
          <p>
            Product Concepualization <br />
            Data Science/ML Research <br />
            Core Team Formation
          </p>
          <RoadStrokeDot active={isFirstActive} />
        </div>
        <div id={!isSecondActive ? 'notActive' : ''}>
          <h3>Q1-Q2 2023</h3>
          <div>
            <p style={{ fontWeight: 'bold' }}>
              Complete Microservice Architeture
            </p>
            <article>Disruption Testnet v1</article>
            <span className="active">
              Tournament System, Front End, Back End <br />
              Prize Pools Payout Executation, ML End Points/ <br />
              Preliminary Models
            </span>
          </div>
          <RoadStrokeDot active={isSecondActive} />
        </div>
        <div id={!isFhirdActive ? 'notActive' : ''}>
          <h3>Q2 2023</h3>
          <div>
            <p style={{ fontWeight: 'bold' }}>
              ML Models (devs integration) <br />
              3rd Party Game Integrations <br />
              Disruption Testnet V2
            </p>
            <span>
              Additional Game Integration, <br />
              AI Tools for Game Developers, NFT Marketplace
            </span>
          </div>
          <RoadStrokeDot active={isFhirdActive} />
        </div>
        <div id={!isFourActive ? 'notActive' : ''}>
          <h3>Q2-Q3 2023</h3>
          <div>
            <p style={{ fontWeight: 'bold' }}>
              $DX Token TGE (Q3) <br />
              DX SDK Launch <br />
            </p>
            <span>Large Dataset Building</span>
          </div>
          <RoadStrokeDot active={isFourActive} />
        </div>
      </RoadContent>
      <RoadStroke ref={ref}>
        <ActiveRoadStroke
          // height={'37%'}
          style={{ transform: `scaleY(${scroll})` }}
        />
      </RoadStroke>
    </RoadWrapper>
  )
}

export default RoadmapSection
