import { HStack, Icon, Text } from "@chakra-ui/react"
// interface
import { Platform } from "../hooks/useGames"
// icons
import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from'react-icons/md'
import{SiNintendo} from 'react-icons/si';
import {BsGlobe} from'react-icons/bs';
import { IconType } from "react-icons";


interface Prop {
    platforms: Platform[]
}
const PlatformIconList = ({platforms}:Prop) => {
  const iconMap:{[key:string]:IconType} = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    iOS: MdPhoneIphone,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    nintendo: SiNintendo,
    other: BsGlobe
  }
  return (
    <HStack marginY={'12px'}>
    {platforms.map((platform) => (
      <Icon  as={iconMap[platform.slug]} color={'gray.500'} key={platform.id} />
  ))}
    </HStack>
  )
}

export default PlatformIconList