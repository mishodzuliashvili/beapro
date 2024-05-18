import Select from "@/_components/select";
import db from "@/lib/db";
import PageForm from "./page-form";

type DashboardPageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function DashboardPage({
  params,
  searchParams,
}: DashboardPageProps) {
  const users = await db.user.findMany();
  return (
    <>
      <div className="container">
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
        <PageForm />
      </div>
    </>
  );
}
