import { Box, Grid } from '@chakra-ui/react'

import MottaiNightCardGridItem from './MottaiNightCardGridItem'

export default function MottaiNightList({ mottaiNightLinkArr }: { mottaiNightLinkArr: MottaiNightLinkObj[] }) {
  return (
    <Box>
      <Box mb={8}>
        <MottaiNightGrid mottaiNightLinkArr={mottaiNightLinkArr} />
      </Box>
    </Box>
  )
}

function MottaiNightGrid({ mottaiNightLinkArr }: { mottaiNightLinkArr: MottaiNightLinkObj[] }) {
  const  MottaiNighItem = []

  for (const mottai_night_link_obj of mottaiNightLinkArr) {
    MottaiNighItem.push(MottaiNightCardGridItem(mottai_night_link_obj))
  }
  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
      gap={[6]}
    >
      { MottaiNighItem}
    </Grid>
  )
}
