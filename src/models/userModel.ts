export interface User {
  email: string
  id: string
  role: Roles
  name: string
  profilePicture: string | null
}

type Roles = 'admin' | 'user' | 'moderator'
