// in src/User.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const UserList = (props) => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid>
      <TextField source="displayName" />
      <TextField source="email" />
      <TextField source="npm" />
      <TextField source="userType" />
      <TextField source="dateCreated" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="displayName" />
      <TextField source="userType" />
      <TextField source="email" />
      <TextField source="npm" />
    </SimpleShowLayout>
  </Show>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextField source="displayName" />
      <TextField source="userType" />
      <TextField source="email" />
      <TextField source="npm" />
    </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="createdate" />
      <TextField source="displayName" />
      <TextField source="userType" />
      <TextField source="email" />
      <TextField source="npm" />
    </SimpleForm>
  </Edit>
);
