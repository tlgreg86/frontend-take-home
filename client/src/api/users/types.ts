export type User = {
  id: string;
  createdAt: string;
  updatedAt: string;
  first: string;
  last: string;
  roleId: string;
  photo?: string;
};

export type FetchUsersParams = {
  search?: string;
  page: number;
};

export type CreateUserParams = {
  firstName: string;
  lastName: string;
  roleId: string;
}