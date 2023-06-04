export interface UserType  {
   id: number,
   first_name: string,
   last_name: string,
   email: string,
   avatar: string
}

export interface HttpUsersListResponse  {
   page: number,
   per_page: number,
   total: number,
   total_pages: number,
   data: UserType[],
}