import Icon from '@/components/Helpers/Icon'
import Show from '@/components/Helpers/Show'
import Link from 'next/link'

const NavLink = ({ active = false, icon = "HiChevronDoubleRight", label, path, ...props }) => {
    const activeLink = active ? "active" : ""
    return (
        <Link {...props} href={path} className={`sidebar-link ${activeLink}`}>
            <Show when={typeof icon === 'string'}>
                <Icon name={icon} />
            </Show>
            <span className="ml-3">{label}</span>
        </Link>
    )
}

export default NavLink
