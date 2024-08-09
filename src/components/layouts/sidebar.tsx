import { NavLink } from 'react-router-dom'
import { navbarItems } from '../../utils/nav-constants'
import { DropDown } from '../../assets/icons/sidebar'
export default function Sidebar() {
    return (
        <aside id="sidebar">

            <nav className='sidebar-nav'>
                {navbarItems.map((section) => (
                    <section key={section.id} className='sidebar-section work-sans-regular'>
                        <div className='sidebar-section-description'>{section.description}</div>
                        {section.menus.map((menu) => (
                            <NavLink
                                key={menu.id}
                                to={menu.path}
                                className={({ isActive, isPending }) =>
                                    isActive ? "active-menu" : isPending ? "pending-menu" : "inactive-menu"
                                }
                            >
                                {({ isActive }) => (
                                    <div>
                                        <menu.icon
                                            className='mr-2'
                                            fill={isActive ? '#213F7D' : '' }
                                        />
                                        {menu.description} &nbsp;
                                        {section.id === 0 && (<DropDown />)}
                                    </div>
                                )}
                            </NavLink>
                        ))}
                    </section>
                ))}
            </nav>
        </aside>
    )
}
