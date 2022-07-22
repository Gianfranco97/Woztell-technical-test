import completeDataFetch from "./completeDataFetch";

const API_URL = "https://swapi.dev/api";

export async function getCharacters(page: number, search: string) {
  const res = await fetch(`${API_URL}/people?page=${page}&search=${search}`);

  return res.json();
}

export async function getCharacter(id: string) {
  const res = await fetch(`${API_URL}/people/${id}`);

  return completeDataFetch(await res.json());
}
