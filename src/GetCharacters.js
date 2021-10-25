import { gql, useQuery } from "@apollo/client";

const characters = gql`
  query {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

export function GetCharacters() {
  const { data, loading, error } = useQuery(characters);

  return (
    <div>
      {data.characters.results.map((character, idx) => (
        <p>{character.name}</p>
      ))}
    </div>
  );
}
