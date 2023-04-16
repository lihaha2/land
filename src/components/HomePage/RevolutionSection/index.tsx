import { useAnimation } from 'framer-motion'
import withBasePath from '@/helpers/withBasePath'
import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  RevolutionContent,
  RevolutionHeading,
  RevolutionImageWrapper,
  RevolutionText,
  RevolutionWrapper,
} from './styled'

const imgVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: -737, opacity: 0 },
}

const textVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: -737, opacity: 0 },
}

const RevolutionSection = () => {
  const control = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.8 })

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <RevolutionWrapper ref={ref} id="platform">
      <RevolutionImageWrapper
        variants={imgVariants}
        initial="hidden"
        animate={control}
        transition={{ duration: 1 }}
      >
        <Image
          src={withBasePath('/assets/images/revolution.webp')}
          width={740}
          height={574}
          alt=""
        />
      </RevolutionImageWrapper>
      <RevolutionContent
        variants={textVariants}
        initial="hidden"
        animate={control}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <RevolutionHeading>
          Revolutionary <br />
          platform
        </RevolutionHeading>
        <RevolutionText>
          Game creators leverage our powerful SDK to instantly take <br />
          advantage of competitive gaming infrastructure, new revenue <br />
          sources and data science analytics.
          <br />
          <br />
          DisruptionX seamlessly connects Blockchain, Gaming and AI.
        </RevolutionText>
      </RevolutionContent>
    </RevolutionWrapper>
  )
}

export default RevolutionSection
