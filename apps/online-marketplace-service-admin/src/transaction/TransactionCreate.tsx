import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { AdTitle } from "../ad/AdTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="status" source="status" />
        <TextInput label="paymentMethod" source="paymentMethod" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="ad.id" reference="Ad" label="Ad">
          <SelectInput optionText={AdTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
