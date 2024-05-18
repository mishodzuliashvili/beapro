"use client";

import Select from "@/_components/select";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { addUsers, getUsers } from "./action";

type PageFormProps = {};

export default function PageForm({}: PageFormProps) {
  const [users, setUsers] = useState<any[]>([]);
  return (
    <>
      <Select
        isMulti
        isCreatable
        onValueChange={(data) => {
          setUsers(data);
        }}
        loadOptions={async (inputValue: string) => {
          const users = await getUsers(inputValue);
          return users.map((user) => ({
            value: user.email,
            label: user.name,
          }));
        }}
      />
      <Button onClick={() => addUsers(users)}>Submit</Button>
    </>
  );
}
