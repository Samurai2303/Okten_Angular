export interface ICreatedUser {
  id: number;
  username: string;
  password: string;
  is_active: boolean;
  is_staff: boolean;
  last_login: string;
  created: string;
  updated: string;
}
