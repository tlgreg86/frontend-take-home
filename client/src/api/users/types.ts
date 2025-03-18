export interface User {
  id: string;
  createdAt: string;
  updatedAt: string;
  first: string;
  last: string;
  roleId: string;
  photo?: string;
};

export interface FetchUsersParams{
  search?: string;
  page: number;
};