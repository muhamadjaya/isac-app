import { Button } from "flowbite-react";
import Link from "next/link";

export default function SubmitWithCancel({ href, loading = false, }) {
    const onClick = (e) => {
        if (loading) {
            e.preventDefault()
        }
    }
    return (
        <>
            <Link onClick={onClick} href={href}>
                <Button disabled={loading} pill={true} color="dark">
                    Cancel
                </Button>
            </Link>
            <Button disabled={loading} type="submit" pill={true}>submit</Button>
        </>
    )
};
