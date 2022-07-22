import { useCallback, useEffect, useState } from 'react';
import { Input, List, Pagination } from 'antd';
import { getCharacters } from 'utils/api';
import type { IPeople } from 'types';
import MainLayout from 'components/MainLayout';
import CharactersListItem from './CharactersListItem';
import "./CharactersList.scss"

const CHARACTERS_PER_PAGE = 10

export default function CharactersList() {
  const [totalCharacters, setTotalCharacters] = useState(1)
  const [searchName, setSearchName] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [list, setList] = useState<IPeople[]>([])

  const handleGetCharacters = useCallback(async (page: number) => {
    setCurrentPage(page)
    setIsLoading(true)

    const data = await getCharacters(page, searchName)

    setTotalCharacters(data.count)
    setList(data.results)
    setIsLoading(false)
  }, [searchName])

  const handleSearchCharacters = useCallback(async (name: string) => {
    setSearchName(name)
  }, [])

  useEffect(() => {
    handleGetCharacters(1)
  }, [handleGetCharacters, searchName])

  const haveData = list.length > 0

  return (
    <MainLayout>
      <Input.Search
        placeholder="Search a character"
        enterButton="Search"
        size="large"
        onSearch={name => handleSearchCharacters(name)}
        disabled={isLoading}
        className="search-input"
      />

      <div className='container'>
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={list}
          loading={isLoading}
          renderItem={(item: IPeople) => <CharactersListItem item={item} />}
          footer={
            haveData && (
              <Pagination
                current={currentPage}
                total={totalCharacters}
                pageSize={CHARACTERS_PER_PAGE}
                onChange={page => handleGetCharacters(page)}
                showSizeChanger={false}
                showTotal={total => `Total ${total} characters`}
              />
            )
          }
        />
      </div>
    </MainLayout>
  )
}