import { File, Group, Savings, Users } from "../../../assets/icons/icons";
import DashboardCard from "../../shared/dashboard-card";

export default function Index() {
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

      <section className="container index-users-table mt-12">
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Points</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
          <tr>
            <td>Adam</td>
            <td>Johnson</td>
            <td>67</td>
          </tr>
        </table>
      </section>
    </div>
  )
}
