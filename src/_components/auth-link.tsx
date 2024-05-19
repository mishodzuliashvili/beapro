import getCurrentUser from "@/actions/user/current/get";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@nextui-org/react";
import { User } from "@prisma/client";
import LogoutLink from "./logout-link";
import LoginButton from "./login-button";

type AuthLinkProps = {
  user: User | null;
};

export default function AuthLink({ user }: AuthLinkProps) {
  return (
    <>
      {!user && <LoginButton variant="flat" color="primary" />}
      {user && (
        <div>
          <LogoutLink />
        </div>
      )}
    </>
  );
}
