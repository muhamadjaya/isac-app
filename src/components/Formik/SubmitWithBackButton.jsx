import { Button } from "flowbite-react";
import Link from "next/link";

export default function SubmitWithBackButton({ backTo, loading = false, }) {
    const onClick = (e) => {
        if (loading) {
            e.preventDefault()
        }
    }
    return (
        <div className="flex flex-row space-x-3 space-x-2 py-2 items-center">
            <Link onClick={onClick} href={backTo}>
                <Button disabled={loading} pill={true} color="dark">
                    Back
                </Button>
            </Link>
            <Button disabled={loading} type="submit" pill={true}>submit</Button>
        </div>
    )
};
