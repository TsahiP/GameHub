import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenres";
interface Props {
  selectedGenre:  Genre|null ;
  selectedPlatform: Platform|null;
}
const GameGrid = ({selectedGenre,selectedPlatform}: Props) => {
  const { data, error, loadingSkelaton   } = useGames(selectedGenre,selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} padding={10} spacing={3}>
        {loadingSkelaton &&
          skeletons.map((index) => <GameCardSkeleton key={index} />)}
        {data ? (
          data.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <></>
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
