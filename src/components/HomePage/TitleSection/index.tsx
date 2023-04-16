import goToTagById from '@/helpers/goToTagById'
import withBasePath from '@/helpers/withBasePath'
import { theme } from '@/styles/globals'
import { useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import {
  Button,
  ContentContainer,
  Heading,
  MonitorVideo,
  MonitorWrapper,
  Paragraph,
  TitleWrapper,
} from './styled'

const variants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: -837, opacity: 0 },
}

const TitleSection = () => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <TitleWrapper className="leftPd" id="main">
      <ContentContainer
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={control}
        transition={{ duration: 1 }}
      >
        <Heading>
          Competition <br />
          at the core of <br />
          <span style={{ color: theme.colors.Main_Blue }}>Web3 Gaming</span>
        </Heading>
        <Paragraph>
          A competition centric platform driven by <br />
          data science and blockchain
        </Paragraph>
        <Button onClick={goToTagById('stay')}>GET STARTED</Button>
      </ContentContainer>
      <MonitorWrapper>
        <Image
          src={withBasePath('/assets/images/monitor.webp')}
          alt=""
          priority
          width={918}
          height={680}
        />
        <MonitorVideo
          autoPlay
          muted
          preload="auto"
          src={withBasePath('/assets/videos/webisite-video-header.webm')}
        >
          <source
            src={withBasePath('/assets/videos/webisite-video-header.mp4')}
            type="video/mp4"
          />
          <source
            src={withBasePath('/assets/videos/webisite-video-header.webm')}
            type="video/webm"
          />
        </MonitorVideo>
      </MonitorWrapper>
    </TitleWrapper>
  )
}

export default TitleSection
