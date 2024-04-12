import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, loadingSkelaton } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} padding={10} spacing={10}>
        {loadingSkelaton &&
          skeletons.map((index) => <GameCardSkeleton key={index} />)}
        {games ? (
          games.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <></>
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
