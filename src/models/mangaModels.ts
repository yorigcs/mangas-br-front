export interface newMangaData {
  name: string
  coverPicture: string
  description: string
  author: string

}

export interface Manga {
  id: string
  cover_picture: string
  name: string
  description: string
  author: string
  posted_by: string
  followed_by: number
  status: string
  rating: number | null
  created_at: string
  updated_at: string
  GenreManga: GenreManga[]
}

interface GenreManga {
  genre_id: string
  genre: { name: string }

}
