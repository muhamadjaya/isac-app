import { Dropdown, Avatar, Navbar } from "flowbite-react"
import { useBaseAuthenticatedLayoutContext } from '@/components/Layouts/BaseAuthenticatedLayout'

export default function TopBar({ topbarActions }) {
    const { user, logout } = useBaseAuthenticatedLayoutContext()

    return (
        <Navbar
            fluid={true}
            rounded={false}
            className="bg-grey dark:bg-transparent"
        >
            <div className="flex md:order-2 pr-3">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar statusPosition="bottom-right" status="online" bordered alt="User settings" img={user.picture} rounded={true} /> }
                    className="w-44"
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            {user.name}
                        </span>
                        <span className="block truncate text-xs font-medium">
                            <span className="inline-flex items-center p-1 mr-2 text-sm font-semibold text-green dark:bg-green-700 dark:text-green rounded">
                                <span className="sr-only">Icon description</span>
                            </span>
                            Online
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashboard
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={logout}>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="pl-3">
                {topbarActions}
            </Navbar.Collapse>
        </Navbar>
    )
}
