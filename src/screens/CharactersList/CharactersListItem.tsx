import { Card, List } from 'antd';
import { IPeople } from 'types';
import { Link } from 'react-router-dom';

interface IProps {
  item: IPeople
}

export default function CharactersListItem({ item }: IProps) {
  const urlSplit = item.url.split("/")
  const characterID = urlSplit[urlSplit.length - 2]

  return (
    <List.Item>
      <Link to={`/${characterID}`}>

        <Card title={item.name} >
          <b>Gender:</b> {item.gender} <br />
          <b>Hair color:</b> {item.hair_color} <br />
          <b>Skin color:</b> {item.skin_color} <br />
        </Card>
      </Link>
    </List.Item>
  )
}