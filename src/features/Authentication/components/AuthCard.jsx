import { Card } from 'flowbite-react'

const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
        <div>{logo}</div>

        <div className="w-full sm:max-w-md mt-6 overflow-hidden sm:rounded-lg">
            <Card>
                {children}
            </Card>
        </div>
    </div>
)

export default AuthCard
