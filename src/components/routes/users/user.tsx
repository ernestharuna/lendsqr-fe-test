import { Link, useLoaderData } from "react-router-dom";
import users from "../../../http/users"
import { ProfileAvatar } from "../../../assets/icons/icons";

export async function loader({ params }: any) {
    const user = await users.getUser(params.userId);
    if (!user) {
        throw new Response("", {
            status: 404,
            statusText: "Contact not found",
        });
    }
    return { user }
}

export default function User() {
    const { user }: any = useLoaderData();
    console.log(user);


    return (
        <div className="work-sans" id="user">
            <Link to={"/users"} className="user-back">← Back to users</Link>
            <div className="flex items-center justify-between user-header">
                <h3 className="work-sans-regular blue">
                    User Details
                </h3>
                <div className="flex items-center gap-4">
                    <button className="user-blacklist-button mr-2">BLACKLIST USER</button>
                    <button className="user-activate-button">ACTIVATE USER</button>
                </div>
            </div>

            <section className="mt-5 mb-10 user-banner">
                <div className="flex items-center">
                    <div className="flex items-center user-index">
                        <div className="user-profile-avatar flex items-center justify-center">
                            <ProfileAvatar />
                        </div>
                        <div className="ml-4">
                            <div className="user-fullname mb-2">{user.profile.name}</div>
                            <div className="user-id gray">{user.id}</div>
                        </div>
                    </div>
                    <div className="user-tier">
                        <div className="tier mb-2">User's Tier</div>
                        <div>⭐⭐⭐</div>
                    </div>
                    <div className="user-balance">
                        <div className="user-fullname mb-2">
                            N200,000.00
                        </div>
                        <div className="user-bank blue">
                            2210228674/Standard Chatered Bank
                        </div>
                    </div>
                </div>

                <div className="user-profile-nav mt-7">
                    <div className="active"> General Details</div>
                    <div>Documents</div>
                    <div>Bank Details</div>
                    <div>Loans</div>
                    <div>Savings </div>
                    <div>App and System</div>
                </div>
            </section>

            <section className="user-misc-info">
                <div className="user-misc-container">
                    <div className="user-misc-header">
                        Personal Information
                    </div>
                    <div className="user-misc-grid">
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">FULL NAME</div>
                            <div className="user-misc-data">{user.profile.name}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">PHONE NUMBER</div>
                            <div className="user-misc-data">{user.profile.phone}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">EMAIL ADDRESS</div>
                            <div className="user-misc-data">{user.email}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">BVN</div>
                            <div className="user-misc-data">{user.profile.bvn}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">GENDER</div>
                            <div className="user-misc-data">{user.profile.gender}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">MARITAL STATUS</div>
                            <div className="user-misc-data">{user.profile.maritalStatus}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">CHILDREN</div>
                            <div className="user-misc-data">None</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">TYPE OF RESIDENCE</div>
                            <div className="user-misc-data">{user.profile.residenceType}</div>
                        </div>
                    </div>
                </div>
                <div className="user-misc-container">
                    <div className="user-misc-header">
                        Education and Employment
                    </div>
                    <div className="user-misc-grid">
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">LEVEL OF EDUCATION</div>
                            <div className="user-misc-data">{user.profile.misc.educationLevel}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">EMPLOYMENT STATUS</div>
                            <div className="user-misc-data">{user.profile.misc.employmentStatus}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">SECtOR OF EMPLOYMENT</div>
                            <div className="user-misc-data">{user.profile.misc.employmentSector}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">DURATION OF EMPLOYMENT</div>
                            <div className="user-misc-data">{user.profile.misc.employmentDuration}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">OFFICIAL EMAIL</div>
                            <div className="user-misc-data">{user.email}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">MONTHLY INCOME</div>
                            <div className="user-misc-data">{user.profile.misc.income}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">LOAN REPLACEMENT</div>
                            <div className="user-misc-data">{user.profile.misc.loanRepayment}</div>
                        </div>
                    </div>
                </div>
                <div className="user-misc-container">
                    <div className="user-misc-header">
                        Socials
                    </div>
                    <div className="user-misc-grid">
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">TWITTER</div>
                            <div className="user-misc-data">@user_name</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">FACEBOOK</div>
                            <div className="user-misc-data">{user.profile.name}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">INSTAGRAM</div>
                            <div className="user-misc-data">@user_name</div>
                        </div>
                    </div>
                </div>
                <div className="user-misc-container">
                    <div className="user-misc-header">
                        Guarantor
                    </div>
                    <div className="user-misc-grid">
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">FULL NAME</div>
                            <div className="user-misc-data">{user.guarantor.name}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">PHONE NUMBER</div>
                            <div className="user-misc-data">{user.guarantor.phone}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">EMAIL ADDRESS</div>
                            <div className="user-misc-data">{user.guarantor.email}</div>
                        </div>
                        <div className="user-misc-detail">
                            <div className="user-misc-title mb-2">RELATIONSHIP</div>
                            <div className="user-misc-data">{user.guarantor.relationship}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
