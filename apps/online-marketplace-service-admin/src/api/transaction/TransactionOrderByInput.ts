import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  amount?: SortOrder;
  status?: SortOrder;
  paymentMethod?: SortOrder;
  userId?: SortOrder;
  adId?: SortOrder;
};
