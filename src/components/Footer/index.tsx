import withBasePath from '@/helpers/withBasePath'
import Image from 'next/image'
import Link from 'next/link'
import { FooterWrapper } from './styled'
import FooterLogo from '../../../public/assets/images/logo/footerLogo.svg'

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <Image src={FooterLogo} alt="Logo" />
        <div className="links">
          <Link className="link inactive" href="">
            Line of Control
          </Link>
          <Link className="link inactive" href="">
            CyberX
          </Link>
          <Link className="link inactive" href="">
            8 Ball Pool Game
          </Link>
          <Link
            className="link"
            href="https://blog.disruptionx.io/"
            target="_blank"
          >
            Blog
          </Link>
          <Link className="link" href="">
            Legal & Privacy
          </Link>
        </div>
      </div>
      <div>
        <p>DisruptionX © 2023 - All rights reserved.</p>
        <div className="socials">
          <Link
            href="https://www.facebook.com/disruptionxofficial/"
            target="_blank"
          >
            <Image
              src={withBasePath('/assets/images/socials/FACEBOOK.svg')}
              alt="FACEBOOK"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://twitter.com/disruption_x" target="_blank">
            <Image
              src={withBasePath('/assets/images/socials/TWITTER.svg')}
              alt="TWITTER"
              width={32}
              height={32}
            />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC5T2MZ_y4ToQcb5A34FQQKA"
            target="_blank"
          >
            <Image
              src={withBasePath('/assets/images/socials/YOUTUBE.svg')}
              alt="YOUTUBE"
              width={32}
              height={32}
            />
          </Link>
          <Link href="https://discord.gg/MdC9HsF3XZ" target="_blank">
            <Image
              src={withBasePath('/assets/images/socials/DISCORD.svg')}
              alt="DISCORD"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer
