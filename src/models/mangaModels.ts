
export interface newMangaData {
  name: string
  coverPicture: any
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

export interface MangaWithChapter {
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
  Chapter: Chapter[]
}

export interface Chapter {
  id: string
  name: string
  chapter_num: number
  manga_id: string
  season: number
  created_at: string
  updated_at: string
}
