import { SortOrder } from "../../util/SortOrder";

export type AdOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  price?: SortOrder;
  status?: SortOrder;
  photos?: SortOrder;
  videos?: SortOrder;
  categoryId?: SortOrder;
  userId?: SortOrder;
};
