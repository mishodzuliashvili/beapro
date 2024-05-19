import { Button } from "@nextui-org/react";
import { LogoutLink as _LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
type LogoutLinkProps = {};

export default function LogoutLink({}: LogoutLinkProps) {
  return (
    <_LogoutLink>
      <Button color="primary" variant="flat">
        Log out
      </Button>
    </_LogoutLink>
  );
}
