import getCurrentUser from "@/actions/user/current/get";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@nextui-org/react";
import { User } from "@prisma/client";
import LogoutLink from "./logout-link";

type AuthLinkProps = {
  user: User | null;
};

export default function AuthLink({ user }: AuthLinkProps) {
  return (
    <>
      {!user && (
        <Button color="primary" variant="flat">
          <RegisterLink
            authUrlParams={{
              connection_id:
                process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
            }}
          >
            Log in
          </RegisterLink>
        </Button>
      )}
      {user && (
        <div>
          {user.name} <LogoutLink />
        </div>
      )}
    </>
  );
}
