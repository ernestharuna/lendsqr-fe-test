import { SVGProps } from "react";

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    description: string;
    data: string | number;
}
export default function DashboardCard({
    Icon,
    description,
    data,
}: Props) {
    return (
        <div className='dashboard-card work-sans'>
            <div className="dashboard-card-icon"><Icon /></div>
            <div className="dashboard-card-description">{description}</div>
            <div className="dashboard-card-data">{data}</div>
        </div>
    )
}
