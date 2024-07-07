import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { AdTitle } from "../ad/AdTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
