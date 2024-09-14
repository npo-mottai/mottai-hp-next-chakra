import { Box, Grid, GridItem } from '@chakra-ui/react'

import {
  CommonExternalLinkText,
  CommonImage,
  CommonListItem,
  CommonText,
  CommonUnorderedList,
} from '../Common'

export default function ExperienceProgram() {
  return (
    <Box>
      <CommonText text="農業体験、鶏の解体を通して食べることについて考える授業、狩猟体験、猟師と山歩き、罠の体験、など様々な体験を提供しています。" />
      <CommonText text="鶏解体ワークショップについては、過去に次のようなメディアに掲載していただきました。" />
      <CommonUnorderedList>
        <CommonListItem>
          <CommonExternalLinkText
            href={'https://youtu.be/fEPPuFXMq3A'}
            text={'テレビ東京 全力イノベーターズ | SDGsに挑むZ世代～食を考える'}
          ></CommonExternalLinkText>
        </CommonListItem>
        <CommonListItem>
          <CommonExternalLinkText
            href={'https://www.fnn.jp/articles/-/669192?display=full'}
            text={'フジテレビ フューチャーランナーズ～17の未来 | 食べ物は動物の命」鶏を解体して食の尊さを考えるワークショップが目指す“食べ残し”の意識改革'}
          ></CommonExternalLinkText>
        </CommonListItem>
        <CommonListItem>
          <CommonExternalLinkText
            href={'https://sustabi.com/blog/5922/'}
            text={'サスタビ | 【神奈川】鶏の解体ワークショップで「食の裏側」を考える'}
          ></CommonExternalLinkText>
        </CommonListItem>
        <CommonListItem>
          <CommonExternalLinkText
            href={'https://www.townnews.co.jp/0606/2022/01/28/610604.html'}
            text={'NEWS | タウンニュース藤沢版 食べ残しで交流'}
          ></CommonExternalLinkText>
        </CommonListItem>
      </CommonUnorderedList>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
        gap={[6]}
      >
        <GridItem>
          <Box width="full" borderWidth="1px" rounded="lg" overflow="hidden">
            <CommonImage
              src={'/images/experience-program-1.webp'}
              alt={'experience-program-1'}
            />
          </Box>
        </GridItem>
        <GridItem>
          <Box width="full" borderWidth="1px" rounded="lg" overflow="hidden">
            <CommonImage
              src={'/images/experience-program-2.webp'}
              alt={'experience-program-2'}
            />
          </Box>
        </GridItem>
        <GridItem>
          <Box width="full" borderWidth="1px" rounded="lg" overflow="hidden">
            <CommonImage
              src={'/images/experience-program-3.webp'}
              alt={'experience-program-3'}
            />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}
