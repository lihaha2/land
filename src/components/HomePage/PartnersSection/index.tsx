import withBasePath from '@/helpers/withBasePath'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { PartnersWrapper } from './styled'

const PartnersSection = () => {
  const control = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.8 })

  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <PartnersWrapper id="partners" ref={ref}>
      <h2>Partners</h2>
      <div>
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.div
            variants={variants}
            initial="hidden"
            animate={control}
            key={i}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Image
              alt=""
              width={175}
              height={120}
              src={withBasePath(`/assets/images/partners/${i + 1}.webp`)}
            />
          </motion.div>
        ))}
      </div>
    </PartnersWrapper>
  )
}

export default PartnersSection
