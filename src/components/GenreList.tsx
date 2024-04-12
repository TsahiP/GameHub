import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { getCroppedImageUrl } from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
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

            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
