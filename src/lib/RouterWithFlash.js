import { useRouter } from "next/router"
import { toast } from "react-toastify"

export default function useRouteWithFlash() {
    const router = useRouter()
    const query = router?.query

    const showFlashIfAny = () => {
        if (query?.flashMessage?.length) {
            const flashMessage = query.flashMessage
            switch (query?.flashType) {
                case 'success':
                    toast.success(flashMessage)
                    break;
                case 'error':
                    toast.error(flashMessage)
                    break;
                case 'warning':
                    toast.warning(flashMessage)
                    break;
                default:
                    toast.info(flashMessage)
                    break;
            }
        }
    }

    const pushWithFlash = (pathname, flashType, flashMessage) => {
        return router.push({
            pathname,
            query: {
                flashType,
                flashMessage
            }
        }, pathname)
    }
    const pushWithSuccess = (pathname, flashMessage) => {
        return pushWithFlash(pathname, 'success', flashMessage)
    }
    const pushWithError = (pathname, flashMessage) => {
        return pushWithFlash(pathname, 'error', flashMessage)
    }
    const pushWithInfo = (pathname, flashMessage) => {
        return pushWithFlash(pathname, 'info', flashMessage)
    }
    const pushWithWarning = (pathname, flashMessage) => {
        return pushWithFlash(pathname, 'warning', flashMessage)
    }

    return {
        showFlashIfAny,
        pushWithFlash,
        pushWithError,
        pushWithSuccess,
        pushWithWarning,
        pushWithInfo
    }
}
