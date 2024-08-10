import { File, Group, Savings, SeeMore, TableFilter, Users } from "../../../assets/icons/icons";
// import { users } from "../../../utils/mockdata";
import DashboardCard from "../../shared/dashboard-card";
import users from "../../../http/users";
import { useLoaderData } from "react-router-dom";
import { formatDate } from "../../../utils/dateFormatter";
import UserStatus from "../../shared/user-status";

export async function loader() {
  const lenders = await users.get();
  return { lenders }
}

export default function Index() {
  const { lenders }: any = useLoaderData();
  console.log(lenders);

  return (
    <div className="container index-container font-regular">
      <section className="mt-10">
        <h3 className="mt-12 mb-10">
          Users
        </h3>

        <div className="users-card-container gap-5">
          <DashboardCard
            Icon={Users}
            description="Users"
            data="2,453"
          />
          <DashboardCard
            Icon={Group}
            description="Active users"
            data="2,453"
          />
          <DashboardCard
            Icon={File}
            description="Users with loans"
            data="2,453"
          />
          <DashboardCard
            Icon={Savings}
            description="Users savings"
            data="2,453"
          />
        </div>
      </section>

      <section className="container mt-10">
        <table className="index-users-table">
          <thead>

            <tr>
              <th>
                <span className="mr-2">Oranization</span>  <TableFilter /> </th>
              <th>
                <span className="mr-2">Username</span> <TableFilter /> </th>
              <th>
                <span className="mr-2">Email</span> <TableFilter /> </th>
              <th>
                <span className="mr-2">Phone number</span> <TableFilter /> </th>
              <th>
                <span className="mr-2">Date joined</span> <TableFilter /> </th>
              <th>
                <span className="mr-2">Status</span> <TableFilter /> </th>
              <th>
                <span className="mr-2"></span> </th>
            </tr>
          </thead>
          <tbody>
            {lenders.map((user: any) => (
              <tr className="index-table-data">
                <td>
                  {user.organization}
                </td>
                <td>
                  {user.username}
                </td>
                <td>
                  {user.email}
                </td>
                <td>
                  {user.profile.phone}
                </td>
                <td>
                  {formatDate(user.createdAt)}
                </td>
                <td>
                  <UserStatus status={user.status} />
                </td>
                <td>
                  {<SeeMore />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
