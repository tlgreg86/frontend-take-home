import { FetchUsersParams } from './users/types';

export const buildQueryString = (searchParams: FetchUsersParams) =>
  new URLSearchParams({
    search: searchParams.search?.toString() ?? "",
    page: searchParams.page.toString(),
  }).toString();
