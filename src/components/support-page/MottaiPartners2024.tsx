import { Box, ListItem, UnorderedList } from '@chakra-ui/react'

import { CommonExternalLinkText } from '../Common'

export const MottaiPartners2024 = () => {
  return (
    <Box>
      <UnorderedList>
        {mottaiPartners.map((partner) => (
          <ListItem key={partner.url}>
            <CommonExternalLinkText
              href={partner.url}
              text={partner.name}
            ></CommonExternalLinkText>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

const mottaiPartners: { name: string; url: string }[] = [
  { name: '矢郷農園', url: 'https://yagounouen.official.ec' },
  { name: '多世代食堂「おむすび」', url: 'https://toukou.in/omusubi/' },
  { name: 'コッコパラダイス', url: 'https://www.coccoparadise.com' },
  { name: 'SALLE A MANGER CHITOSEYA', url: 'http://39chitoseya.com' },
  { name: '湘南電力株式会社', url: 'https://shonan-power.co.jp' },
  { name: 'カグラボ＆大石慎治', url: 'https://www.facebook.com/kamiaruki/' },
  { name: '株式会社CroMen', url: 'https://cromen.net' },
  {
    name: '検索順位の奴隷',
    url: 'https://search-engine.capitalism-slaves.com',
  },
  { name: 'natsumi_omura', url: 'https://www.instagram.com/natsumi_omura/' },
  { name: 'YOOFIN Ltd.', url: 'https://yoofin.net' },
  {
    name: 'かわまた歯科　第2診療室',
    url: 'https://www.instagram.com/kawamata_dental/',
  },
  { name: '世界一周大学', url: 'https://sekadai.com/' },
  {
    name: 'とびうおクラブ／そっか逗子',
    url: 'http://sokka.world/projects_list/tobiuoclub/',
  },
]
