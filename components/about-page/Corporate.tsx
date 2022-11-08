import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { CommonText } from '../../components/Common'

export default function Corporate() {
  return (
    <Box>
      <CommonText text="NPO法人MOTTAIの法人概要は次の通りです。" />
      {/* <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer> */}
    </Box>
  )
}
