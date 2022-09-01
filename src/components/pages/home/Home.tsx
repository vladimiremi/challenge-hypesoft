import { TopNav } from 'components/TopNav'
import { Button } from 'components'

import HappyBoy from 'assets/img/happy-boy.webp'
import * as S from './Home.styled'
import {
  AiOutlineBehance,
  AiOutlineDribbble,
  AiOutlineTwitter,
} from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

export function Home() {
  return (
    <S.Container>
      <S.ContainerInfos>
        <S.Infos>
          <S.Title>
            <h1>Hello, I’m John, a</h1>
            <h2>Software Engineer.</h2>
          </S.Title>

          <S.Description>
            I am a Front-end Developer, passionate about technology and
            programming. I have been working with web development for 2 years,
            always looking for new challenges and knowledge.
          </S.Description>

          <S.Buttons>
            <Button>HERE ME</Button>
            <Button color='white'>VIEW WORK</Button>
          </S.Buttons>

          <S.SocialButtons>
            <text>Follow me on</text>
            <div>
              <Button color='white'>
                <AiOutlineDribbble fontSize={30} />
              </Button>
              <Button>
                <AiOutlineBehance fontSize={30} />
              </Button>
              <Button color='white'>
                <FaFacebookF fontSize={30} />
              </Button>
              <Button color='white'>
                <AiOutlineTwitter fontSize={30} />
              </Button>
            </div>
          </S.SocialButtons>
        </S.Infos>
      </S.ContainerInfos>
      <S.ContainerMenu>
        <TopNav />
        <S.Image>
          <img src={HappyBoy.src} alt='Developer' />
        </S.Image>
      </S.ContainerMenu>
    </S.Container>
  )
}
