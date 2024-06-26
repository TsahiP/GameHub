import React from 'react'
import { Game } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image} from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import { getCroppedImageUrl } from '../services/image-url';
interface Props{
    game:Game;

}

const GameCard = ({game}:Props) => {
  return (

    <Card width={'100%'} borderRadius={15} overflow={'hidden'}>

        <Image src={getCroppedImageUrl(game.background_image,600,400)} alt={game.name} />
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent={'space-between'}>
            <PlatformIconList platforms={game.parent_platforms.map(platform => platform.platform)}/>
            <CriticScore score={game.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard