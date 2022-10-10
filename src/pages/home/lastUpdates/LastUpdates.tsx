import { useEffect, useState } from 'react'
import { MangaWithChapter } from '../../../models/mangaModels'
import { loadMangasWithChapter } from '../../../services/requests'
import styled from 'styled-components'
import { MangaWithChapterPreview } from '../../../components/manga/MangaWithChapterPreview'

export const LastUpdates = (): JSX.Element => {
  const [mangas, setMangas] = useState<MangaWithChapter[] | null>(null)

  useEffect(() => {
    loadMangasWithChapter()
      .then(resp => {
        setMangas(resp.data)
        console.log(resp)
      })
      .catch(err => console.log(err.response.data.error))
  }, [])
  return (
        <LastUpdatesContent>
            {mangas?.map(manga => <MangaWithChapterPreview key={manga.id} {...manga} />)}
        </LastUpdatesContent>
  )
}

const LastUpdatesContent = styled.div`
    width: 100%;
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
 
  @media only screen and (max-width: 480px) {
    grid-template-columns: auto;
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: auto;
  }
`
