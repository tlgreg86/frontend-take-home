export type Role = {
  id: string;
  name: string;
  description: string;
}

export type CreateRoleParams = {
  name: string;
  description: string;
}

export type EditRoleParams = {
  id: string;
  newRoleData?: {
    name?: string;
    description?: string;
  };
};

export type FetchRolesResponse = {
  data: Role[];
}