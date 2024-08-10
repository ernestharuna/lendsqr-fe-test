export default function UserStatus({ status }: { status: string }) {
    switch (status) {
        case 'active':
            return <div className="user-status active-status">
                <span className="user-status-data">{status}</span>
            </div>
        case 'inactive':
            return <div className="user-status inactive-status">
                <span className="user-status-data">{status}</span>
            </div>
        case 'blacklisted':
            return <div className="user-status blacklist-status">
                <span className="user-status-data">{status}</span>
            </div>
        case 'pending':
            return <div className="user-status pending-status">
                <span className="user-status-data">{status}</span>
            </div>
        default:
            return <div className="user-status">
                <span className="user-status-data">{status}</span>
            </div>
    }
}
