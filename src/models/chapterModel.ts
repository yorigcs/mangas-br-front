export interface NewChapter {
  name: string
  chapterNum: string
  mangaId: string
}

export interface Chapter {
  id: string
  name: string
  chapter_num: number
  manga_id: string
  created_at: string
  updated_at: string
}
