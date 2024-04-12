import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card>
        <Skeleton width={'600px'} height={'400px'}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton