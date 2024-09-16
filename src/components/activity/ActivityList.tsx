import { Box, Grid } from '@chakra-ui/react'

import { CommonText } from '../Common'
import ActivityCardGridItem from './ActivityCardGridItem'

export default function ActivityList({ activityLinkArr }: { activityLinkArr: activityLinkObj[] }) {
  return (
    <Box>
      <Box mb={8}>
        <ActivityGrid activityLinkArr={activityLinkArr} />
      </Box>
    </Box>
  )
}

function ActivityGrid({ activityLinkArr }: { activityLinkArr: activityLinkObj[] }) {
  const  MottaiNighItem = []

  for (const mottai_night_link_obj of activityLinkArr) {
    MottaiNighItem.push(ActivityCardGridItem(mottai_night_link_obj))
  }
  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
      gap={[6]}
    >
      { MottaiNighItem.length > 0 ? MottaiNighItem : <CommonText text="開催予定はありません" /> }
    </Grid>
  )
}
