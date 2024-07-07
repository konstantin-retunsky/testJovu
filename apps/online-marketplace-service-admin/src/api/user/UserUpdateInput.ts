import { InputJsonValue } from "../../types";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";
import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { AdUpdateManyWithoutUsersInput } from "./AdUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  role?: string | null;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  messages?: MessageUpdateManyWithoutUsersInput;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  ads?: AdUpdateManyWithoutUsersInput;
  reviews?: ReviewUpdateManyWithoutUsersInput;
};
