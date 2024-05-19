import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@nextui-org/react";
import { ComponentProps } from "react";

type LoginButtonProps = ComponentProps<typeof Button>;

export default function LoginButton(props: LoginButtonProps) {
  return (
    <RegisterLink
      authUrlParams={{
        connection_id: process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
      }}
      className="w-full"
    >
      <Button {...props}>Log in</Button>
    </RegisterLink>
  );
}
