import { Button } from "@nextui-org/react";
import { LogoutLink as _LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
type LogoutLinkProps = {};

export default function LogoutLink({}: LogoutLinkProps) {
  return (
    <Button as={_LogoutLink} color="primary" variant="flat">
      <_LogoutLink>Log out</_LogoutLink>
    </Button>
  );
}
