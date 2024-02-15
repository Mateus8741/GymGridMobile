export interface User {
  aud: string
  confirmed_at: string
  created_at: string
  email: string
  email_confirmed_at: string
  id: string
  last_sign_in_at: string
  phone: string
  role: string
  updated_at: string
}

export interface Session {
  access_token: string
  expires_at: number
  expires_in: number
  refresh_token: string
  token_type: string
  user: User
}

export interface UserModel {
  session: Session
  user: User
}
