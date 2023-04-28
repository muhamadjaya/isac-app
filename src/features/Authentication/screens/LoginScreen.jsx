import { Button } from "flowbite-react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import AuthCard from "@/features/Authentication/components/AuthCard"
import AuthSessionStatus from "@/features/Authentication/components/AuthSessionStatus"
import GuestLayout from "@/components/Layouts/GuestLayout"
import Heading1 from "@/components/Typography/Heading1"
import Input from "@/components/Form/Input"
import InputCheckbox from "@/components/Form/InputCheckbox"
import Link from "next/link"
import useAuth from "@/features/Authentication/app/authHook"

export default function LoginScreen() {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()
        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <GuestLayout>
            <AuthCard logo={<Heading1 className="mb-4 uppercase" text={process.env.NEXT_PUBLIC_APP_NAME} />}>
                <AuthSessionStatus className="mb-4" status={status} />
                <form onSubmit={submitForm}>
                    <div>
                        <Input
                            id="email"
                            type="email"
                            label="Email or Username"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            required
                            autoFocus
                            placeholder="Email or username"
                            autoComplete="current-username"
                            errors={errors.email}
                        />
                    </div>
                    <div className="mt-4">
                        <Input
                            id="password1"
                            type="password"
                            label="Password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            required
                            placeholder="Password"
                            autoComplete="current-password"
                            errors={errors.password}
                        />
                    </div>
                    <div className="block mt-4">
                        <InputCheckbox
                            id="remember_me"
                            name="remember"
                            label="Remember me"
                            onChange={event =>
                                setShouldRemember(event.target.checked)
                            }
                        />
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href="/forgot-password"
                            className="text-sm hover:underline text-gray-900 dark:text-white">
                            Duh Gusti, forgot my password?
                        </Link>

                        <Button onClick={submitForm} className="ml-3">Login</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
};
