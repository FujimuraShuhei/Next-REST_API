export interface POST {
  useeId: number
  id: number
  title: string
  body: string
}
export interface COMMENT {
  postId: number
  id: number
  name: string
  email: string
  body: String
}
export interface YASK {
  userId: number
  id: number
  title: string
  completed: boolean
}