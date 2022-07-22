import { Link } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import "./CharactersDetailTitle.scss"

interface IProps {
  title: string
}

export default function CharactersDetailTitle({ title }: IProps) {
  return (
    <>
      <Link to="/">
        <ArrowLeftOutlined className='icon-button' />
      </Link>
      {title}
    </>
  )
}