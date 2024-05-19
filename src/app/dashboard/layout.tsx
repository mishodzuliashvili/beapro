import getCurrentUser from "@/actions/user/current/get";
import { redirect } from "next/navigation";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/");
  }
  return <>{children}</>;
}
