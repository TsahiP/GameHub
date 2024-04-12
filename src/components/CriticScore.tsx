import { Badge } from '@chakra-ui/react'
import React from 'react'
interface Props {
  score: number
}
const CriticScore = ({score}:Props) => {
    let colorScheme = score > 75 ? 'green' : score > 50? 'yellow' :'red'
  return (
    <Badge colorScheme={colorScheme} borderRadius={'5px'} fontSize={'14px'} paddingX={2}>{score}</Badge>
  )
}

export default CriticScore