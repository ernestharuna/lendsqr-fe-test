import { File, Group, Savings, TableFilter, Users } from "../../assets/icons/icons";
import DashboardCard from "../shared/dashboard-card";

export default function Dashboard() {
  return (
    <div className="container dashboard-container font-regular">
      <section className="mt-10">
        <h3 className="mt-12 mb-10">
          Dashboard
        </h3>

        <div className="dashboard-card-container gap-5">
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

      {/* <section className="container mt-12">
        <table className="dashboard-users-table">
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
          </tr>

        </table>
      </section> */}
    </div>
  )
}
