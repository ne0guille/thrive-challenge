export interface PageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Paginated<T> {
  info: PageInfo;
  results: T[];
}
