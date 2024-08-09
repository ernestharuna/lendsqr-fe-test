import { NavLink } from 'react-router-dom'
import { navbarItems } from '../../utils/nav-constants'
export default function Sidebar() {
    return (
        <aside id="sidebar">
            <nav className='sidebar-nav'>
                {navbarItems.map((section) => (
                    <section key={section.id} className='sidebar-section work-sans-regular'>
                        <div className='sidebar-section-description'>{section.description}</div>
                        {section.menus.map((menu) => (
                            <NavLink to={menu.path} className={({ isActive, isPending }) =>
                                isActive ? "active-menu" : isPending ? "pending-menu" : "inactive-menu"
                            }>
                                {menu.description}
                            </NavLink>
                        ))}
                    </section>
                ))}
            </nav>
        </aside>
    )
}
