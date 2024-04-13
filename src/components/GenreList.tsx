import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { getCroppedImageUrl } from "../services/image-url";
interface Props {
  selectedGenre: Genre | null;
  setGenre: (genre: Genre) => void;
}

const GenreList = ({setGenre,selectedGenre}:Props) => {
  const { data,isLoading } = useGenres();
  
  return (
    <>
    {isLoading && <><Spinner/><Text>Loading...</Text></>}
    <List >
      {data.map((genre: Genre) => (
        <ListItem paddingY={1} marginY={1} key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={"8px"}
              src={getCroppedImageUrl(genre.image_background, 600, 400)}
              alt={genre.name}
            />

            <Button fontWeight={selectedGenre?.id ===genre.id? 'bold':'normal'}  onClick={()=>{setGenre(genre)}} variant={'link'} fontSize='lg'>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
