export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  success: boolean;
  total_items: number;
  current_page: number;
  limit: number;
  total_pages: number;
  data: T[];
}

export const parseQueryParam = (
  param: string | null,
  defaultValue: number
): number => {
  const parsed = Number(param);
  return !isNaN(parsed) && parsed > 0 ? parsed : defaultValue;
};

export const paginate = <T>(
  array: T[],
  { page, limit }: PaginationParams
): T[] => {
  return array.slice((page - 1) * limit, page * limit);
};

export const createPaginatedResponse = <T>(
  array: T[],
  { page, limit }: PaginationParams
): PaginatedResponse<T> => {
  const totalItems = array.length;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    success: true,
    total_items: totalItems,
    current_page: page,
    limit: limit,
    total_pages: totalPages,
    data: paginate(array, { page, limit }),
  };
};
