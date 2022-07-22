import { useCallback, useEffect, useState } from 'react';
import { Card, Descriptions } from 'antd';
import { getCharacter } from 'utils/api';
import { useParams } from 'react-router-dom';
import type { IPeople } from 'types';
import MainLayout from 'components/MainLayout';
import LoadingFullPage from 'components/LoadingFullPage';
import CharactersDetailTitle from './CharactersDetailTitle';
import "./CharactersDetail.scss"

export default function CharactersDetail() {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState<IPeople>()

  const handleGetCharacter = useCallback(async () => {
    if (!id) {
      return
    }

    const newCharacterData = await getCharacter(id)
    setCharacterData(newCharacterData as IPeople)
  }, [id])

  const createDescriptionContentList = (items: unknown[], keyToShow: string) => {
    return (
      <ul>
        {items.map((item: any) => <li key={item.url}>{item[keyToShow]}</li>)}
      </ul>
    )
  }

  useEffect(() => {
    handleGetCharacter()
  }, [handleGetCharacter, id])


  if (!characterData) {
    return <LoadingFullPage />
  }

  return (
    <MainLayout>
      <Card
        title={<CharactersDetailTitle title={characterData.name} />}
        className="character-card"
      >
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Height">{characterData.height}</Descriptions.Item>
          <Descriptions.Item label="Mass">{characterData.mass}</Descriptions.Item>
          <Descriptions.Item label="Hair color">{characterData.hair_color}</Descriptions.Item>
          <Descriptions.Item label="Skin color">{characterData.skin_color}</Descriptions.Item>
          <Descriptions.Item label="Eye color">{characterData.eye_color}</Descriptions.Item>
          <Descriptions.Item label="Birth year">{characterData.birth_year}</Descriptions.Item>
          <Descriptions.Item label="Gender">{characterData.gender}</Descriptions.Item>
          <Descriptions.Item label="Homeworld">
            {typeof characterData.homeworld !== "string" && characterData.homeworld.name}
          </Descriptions.Item>
          <Descriptions.Item label="Films">
            {createDescriptionContentList(characterData.films, "title")}
          </Descriptions.Item>
          <Descriptions.Item label="Species">
            {createDescriptionContentList(characterData.species, "name")}
          </Descriptions.Item>
          <Descriptions.Item label="Vehicles">
            {createDescriptionContentList(characterData.vehicles, "name")}
          </Descriptions.Item>
          <Descriptions.Item label="Starships">
            {createDescriptionContentList(characterData.starships, "name")}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </MainLayout>
  )
}