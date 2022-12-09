export interface AddPagesToChapter {
  chapter_id: string
  pagesImages: any
}

export interface Page {
  id: string
  name: string
  page_img: string
  page_num: number
  chapter_id: string
  created_at: Date
  updated_at: Date

}
