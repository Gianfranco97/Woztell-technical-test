import MissingPage from 'components/MissingPage';
import { Route, Routes } from 'react-router-dom';
import CharactersDetail from 'screens/CharactersDetail';
import CharactersList from 'screens/CharactersList';

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CharactersList />} />
      <Route path="/:id" element={<CharactersDetail />} />

      <Route path="*" element={<MissingPage />} />
    </Routes>
  );
}

export default MyRoutes;
