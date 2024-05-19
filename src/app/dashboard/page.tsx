import TLink from "@/_components/t-link";
import getCurrentUser from "@/actions/user/current/get";
import { Button } from "@nextui-org/react";

type DashboardPageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function DashboardPage({
  params,
  searchParams,
}: DashboardPageProps) {
  const user = await getCurrentUser();

  return (
    <>
      <div className="container mt-20">
        <div className="max-w-screen-sm mx-auto text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-black via-violet-500 from-15% to-blue-500 inline-block text-transparent bg-clip-text">
            Hello, {user?.name.split(" ")[0]} welcome to your page
          </h1>
          <p className="mt-4 text-gray-600 text-xl">
            See your tasks and Deadlines here.
          </p>
        </div>
      </div>
      <div className="container">
        <Button as={TLink} href="/dashboard/new" className="mt-4">
          Create new project
        </Button>
      </div>
    </>
  );
}
