import TLink from "@/_components/t-link";
import { Button } from "@nextui-org/react";

type DashboardPageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function DashboardPage({
  params,
  searchParams,
}: DashboardPageProps) {
  return (
    <>
      <div className="container">
        <Button as={TLink} href="/dashboard/new" className="mt-4">
          Create new project
        </Button>
      </div>
    </>
  );
}
