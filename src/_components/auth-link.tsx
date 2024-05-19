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
        <RegisterLink
          authUrlParams={{
            connection_id:
              process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
          }}
        >
          <Button variant="light" className="text-md">
            Log in
          </Button>
        </RegisterLink>
      )}
      {user && (
        <div>
          <LogoutLink />
        </div>
      )}
    </>
  );
}
