const animeList: Anime[] = [
  { id: 1, title: 'Naruto', isFavorite: true },
  { id: 2, title: 'One Piece', isFavorite: false },
  { id: 3, title: 'Bleach', isFavorite: true },
  { id: 4, title: 'Attack on Titan', isFavorite: false },
  { id: 5, title: 'Fullmetal Alchemist', isFavorite: true },
  { id: 6, title: 'Death Note', isFavorite: false },
  { id: 7, title: 'Dragon Ball Z', isFavorite: true },
  { id: 8, title: 'Princess Mononoke', isFavorite: false },
  { id: 9, title: 'Demon Slayer', isFavorite: true },
  { id: 10, title: 'Sword Art Online', isFavorite: false },
  { id: 11, title: 'Tokyo Ghoul', isFavorite: false },
  { id: 12, title: "Howl's Moving Castle", isFavorite: true },
  { id: 13, title: 'One Punch Man', isFavorite: false },
  { id: 14, title: 'Jujutsu Kaisen', isFavorite: true },
  { id: 15, title: 'Haikyuu!!', isFavorite: false },
]

export type Anime = {
  id: number
  title: string
  isFavorite: boolean
}

export const animeApi = {
  getAnime({ title, isFavorite }: GetAnimeSearchParams = {}) {
    return new Promise<Anime[]>((resolve) => {
      setTimeout(() => {
        const filteredAnime = animeList.filter((anime) => {
          if (!title && !isFavorite) {
            return true
          }

          if (!title) {
            return anime.isFavorite === isFavorite
          }

          return anime.title.toLowerCase().includes(title.toLowerCase()) && (!isFavorite || anime.isFavorite)
        })

        resolve(filteredAnime)
      }, 500)
    })
  },
}

export type GetAnimeSearchParams = {
  title?: string
  isFavorite?: boolean
}
