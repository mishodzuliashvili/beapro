import TLink from "@/_components/t-link";
import getCurrentUser from "@/actions/user/current/get";
import SS from "./ss";
import { Button, Input, Textarea } from "@nextui-org/react";
import { GoProjectSymlink } from "react-icons/go";

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black via-primary from-15% to-secondary inline-block text-transparent bg-clip-text">
            Hello, {user?.name.split(" ")[0]} welcome to your page
          </h1>
          <p className="mt-4 text-gray-600 text-xl">
            See your tasks and Deadlines here.
          </p>
        </div>
      </div>
      <div className="container mt-10">
        <div className="max-w-screen-md mx-auto rounded-xl border-2 p-5 py-6">
          <h3 className="text-center text-3xl font-semibold mb-3">
            <span className="mr-2">🧑🏻‍💻</span> Profile info
          </h3>
          <p className="text-center text-gray-600">
            Complete your projects on time and get rewards.
          </p>
          <div className="flex items-center flex-col gap-5 mt-4">
            <Input
              size="lg"
              label="Name and Surname"
              defaultValue={user?.name}
            />
            <Input
              size="lg"
              label="Email"
              disabled
              defaultValue={user?.email}
            />
            <Textarea size="lg" label="Your bio" defaultValue={user?.name} />
            <SS />
          </div>
          <Button
            as={TLink}
            href="/dashboard/new"
            className="mt-4 py-8 w-full font-semibold"
            color="primary"
            size="md"
          >
            Edit Your Profile
          </Button>
        </div>
      </div>
      <div className="container mt-10">
        <div className="max-w-screen-md mx-auto rounded-xl border-2 p-5 py-6">
          <h3 className="text-center text-3xl font-semibold mb-3">
            <span className="mr-2">🎯</span> 5 Projects
          </h3>
          <p className="text-center text-gray-600">
            Complete your projects on time and get rewards.
          </p>
          <div className="flex items-center flex-col gap-5 mt-4">
            {/* projects here */}
            <Button
              as={TLink}
              href="/dashboard/project/1"
              size="md"
              className="flex text-ellipsis h-fit overflow-hidden text-wrap truncate items-center gap-3 w-full p-5 py-[1.3rem] bg-primary/10 rounded-xl"
            >
              <GoProjectSymlink className="min-w-[40px]" size={24} />
              <span className="font-semibold overflow-hidden">
                Read Harry Potter in One Day
              </span>
              {/* <TLink href="/dashboard/project/1">Project 1</TLink> */}
            </Button>
          </div>
          <Button
            as={TLink}
            href="/dashboard/new"
            className="mt-4 py-8 w-full font-semibold"
            color="primary"
            size="md"
          >
            Create new project
          </Button>
        </div>
      </div>
    </>
  );
}
