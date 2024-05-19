import { Button } from "@nextui-org/react";
import { LogoutLink as _LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { FiLogOut } from "react-icons/fi";
type LogoutLinkProps = {};

export default function LogoutLink({}: LogoutLinkProps) {
  return (
    <_LogoutLink>
      <Button isIconOnly color="default" variant="light" className="text-md">
        <FiLogOut size={22} />
      </Button>
    </_LogoutLink>
  );
}
