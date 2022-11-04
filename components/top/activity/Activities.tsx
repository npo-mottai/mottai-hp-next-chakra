import { Box, Heading, Text, Image } from '@chakra-ui/react'

export default function Activities() {
  const activities = []
  for (const activityItem of activityItems) {
    activities.push(
      <Box display={{ md: 'flex' }} mb={[4, 4, 8]}>
        <Image
          htmlWidth="320px"
          htmlHeight="240px"
          objectFit="cover"
          rounded="lg"
          src={activityItem.imageUrl}
          alt={activityItem.title}
        />
        <Box ml={{ md: 4, lg: 8 }}>
          <Text fontSize="sm" py={2} color="gray">
            活動 {activityItem.indexText}
          </Text>
          <Heading as="h3" size="md" mb={2}>
            {activityItem.title}
          </Heading>
          <Text pb={4}>{activityItem.description}</Text>
        </Box>
      </Box>
    )
  }

  return <div>{activities}</div>
}

type ActivityItem = {
  indexText: string
  title: string
  imageUrl: string
  description: string
}

const activityItems: ActivityItem[] = [
  {
    indexText: '01',
    title: '罠オーナー制度',
    imageUrl: '/images/activity-1-trap-owner.jpg',
    description:
      '市民オーナーが罠の狩猟にかかる資金などを提供し、見返りとして狩猟や農業体験などをオーナーに提供するという仕組みです。獣害対策、関係人口増加、環境教育の機会増加、猟師の負担軽減などが見込まれます。',
  },
  {
    indexText: '02',
    title: 'モッタイNight',
    imageUrl: '/images/activity-2-mottai-night.jpg',
    description:
      '廃棄になりそうな食材を持ち寄って、カレーや鍋などを作る料理会です。元は代表菅田の友人が始めた「地球にちょこっと恩返し」をコンセプトに行われる活動でしたが、名前をのれん分けしてもらうことで様々な場所で行われるようになりました。',
  },
  {
    indexText: '03',
    title: '体験事業',
    imageUrl: '/images/activity-3-other.jpg',
    description:
      '上記プロジェクト以外にも、禅から学ぶ食体験、古民家改装、農業体験、漁業体験、DIYなど様々な体験を随時企画していきます。',
  },
]
