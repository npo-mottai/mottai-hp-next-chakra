// TODO: コメントを書く
/**  */
type NewsSummary = {
  url: string
  date: string
  title: string
  thumbnail: string
  description: string
}

type NewsArticle = {
  summary: NewsSummary
  content: string
}
