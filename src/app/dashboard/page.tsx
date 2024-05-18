import db from "@/lib/db";

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
      </div>
    </>
  );
}
