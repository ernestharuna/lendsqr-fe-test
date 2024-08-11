import { Eye, SeeMore, TableFilter, UserApprove, UserCancel } from "../../assets/icons/icons";
import users from "../../http/users";
import { Link, useLoaderData } from "react-router-dom";
import { formatDate } from "../../utils/dateFormatter";
import UserStatus from "../shared/user-status";
import Pagination from "../shared/pagination";
import { useState } from "react";

export async function loader() {
  const lenders = await users.getUsers();
  return { lenders }
}

export default function Index() {
  const { lenders }: any = useLoaderData();

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(100);

  const indexOfLastRecord = page * pageSize;
  const indexOfFirstRecord = indexOfLastRecord - pageSize;
  const tableData = lenders.slice(indexOfFirstRecord, indexOfLastRecord);

  function paginate(pageNumber: number) {
    setPage(pageNumber)
  };

  return (
    <div className="index-container work-sans">
      <section className="mt-10">
        <h3 className="mt-12 mb-10">
          Dashboard
        </h3>
      </section>

      <section className="mt-10">
        <div className="index-table-container px-5">
          <table className="index-users-table">
            <thead>
              <tr>
                <th className="desktop-only">
                  <span className="mr-2">Oranization</span>
                  <span className="index-table-filter">
                    <TableFilter className="index-table-filter-btn" />
                    <div className="index-table-filter-content">
                      <label htmlFor="organization">Organization</label>
                      <input type="text" placeholder="Select" id="organization" />
                      <div className="flex items-center gap-3 mt-7 mb-3">
                        <button className="reset-btn">Reset</button>
                        <button className="filter-btn">Filter</button>
                      </div>
                    </div>
                  </span>
                </th>
                <th>
                  <span className="mr-2">Username</span>
                  <span className="index-table-filter">
                    <TableFilter className="index-table-filter-btn" />
                    <div className="index-table-filter-content">
                      <label>Username</label>
                      <input type="text" placeholder="User" />
                      <div className="flex items-center gap-3 mt-7 mb-3">
                        <button className="reset-btn">Reset</button>
                        <button className="filter-btn">Filter</button>
                      </div>
                    </div>
                  </span>
                </th>
                <th className="desktop-only">
                  <span className="mr-2">Email</span>
                  <span className="index-table-filter">
                    <TableFilter className="index-table-filter-btn" />
                    <div className="index-table-filter-content">
                      <label>Email</label>
                      <input type="text" placeholder="Email" />
                      <div className="flex items-center gap-3 mt-7 mb-3">
                        <button className="reset-btn">Reset</button>
                        <button className="filter-btn">Filter</button>
                      </div>
                    </div>
                  </span>
                </th>
                <th className="desktop-only">
                  <span className="mr-2">Phone number</span>
                  <span className="index-table-filter">
                    <TableFilter className="index-table-filter-btn" />
                    <div className="index-table-filter-content">
                      <label>Phone Number</label>
                      <input type="text" placeholder="Phone Number" />
                      <div className="flex items-center gap-3 mt-7 mb-3">
                        <button className="reset-btn">Reset</button>
                        <button className="filter-btn">Filter</button>
                      </div>
                    </div>
                  </span>
                </th>
                <th className="desktop-only">
                  <span className="mr-2">Date joined</span>
                  <span className="index-table-filter">
                    <TableFilter className="index-table-filter-btn" />
                    <div className="index-table-filter-content">
                      <label>Date</label>
                      <input type="date" placeholder="Date" />
                      <div className="flex items-center gap-3 mt-7 mb-3">
                        <button className="reset-btn">Reset</button>
                        <button className="filter-btn">Filter</button>
                      </div>
                    </div>
                  </span>
                </th>
                <th>
                  <span className="mr-2">Status</span>
                  <span className="index-table-filter">
                    <TableFilter className="index-table-filter-btn" />
                    <div className="index-table-filter-content">
                      <label htmlFor="status">Status</label>
                      <select id="status">
                        <option value="">lendsqr</option>
                        <option value="">Blacklisted</option>
                        <option value="">Active</option>
                        <option value="">Pending</option>
                        <option value="">Inactive</option>
                      </select>
                      <div className="flex items-center gap-3 mt-7 mb-3">
                        <button className="reset-btn">Reset</button>
                        <button className="filter-btn">Filter</button>
                      </div>
                    </div>
                  </span>
                </th>
                <th>
                  <span className="mr-2"></span> </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((user: any) => (
                <tr className="index-table-data" key={user.id}>
                  <td className="desktop-only">
                    {user.organization}
                  </td>
                  <td>
                    {user.username}
                  </td>
                  <td className="desktop-only">
                    {user.email}
                  </td>
                  <td className="desktop-only">
                    {user.profile.phone}
                  </td>
                  <td className="desktop-only">
                    {formatDate(user.createdAt)}
                  </td>
                  <td>
                    <UserStatus status={user.status} />
                  </td>
                  <td>
                    <div style={{ cursor: "pointer" }} className="index-table-dropdown">
                      {<SeeMore className="index-table-actions" />}
                      <div className="index-table-action-content">
                        <Link to={user.id}>
                          <Eye className="mr-2" />  View Details
                        </Link>
                        <Link to="#">
                          <UserCancel className="mr-2" /> Blacklist User
                        </Link>
                        <Link to="#">
                          <UserApprove className="mr-2" /> Activate User
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          size={pageSize}
          data={lenders}
          page={page}
          paginate={paginate}
          handlePageSizeChange={setPageSize}
        />
      </section>
    </div>
  )
}
