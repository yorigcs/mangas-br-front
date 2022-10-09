export interface IGenre {
  name: string
  id?: string
}

export interface GenreClick extends IGenre {
  onClick?: React.MouseEventHandler<HTMLDivElement>
  type?: 'add' | 'remove'
}

export interface Genre {
  mangaId?: string
  genres?: string[] | null
}
