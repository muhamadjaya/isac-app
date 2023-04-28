import { useRouter } from 'next/router'
import Axios from "./Axios"
import Router from "./Router"

export default class Http {
    constructor(routes) {
        this.router = new Router(routes)
    }

    sendRequest(endpoint, setting = {}) {
        let {
            params = {},
            data = {},
            config = {},
        } = setting

        let route = this.router.resolveRoute(endpoint, params)
        let method = route.method.toLowerCase()
        let response;

        switch (method) {
            case 'post':
                response = Axios.post(route.path, data, config)
                break
            case 'put':
                response = Axios.put(route.path, data, config)
                break
            case 'delete':
                response = Axios.delete(route.path, config)
                break
            default:
                response = Axios.get(route.path, config)
                break
        }

        return response
    }

    invoke(endpoint, setting = {}) {
        const onSuccess = setting?.onSuccess ?? this.onSuccess
        const onError = setting?.onError ?? this.onError

        return this
            .sendRequest(endpoint, setting)
            .then(onSuccess)
            .catch(onError)
    }

    getCallback(setting) {
        let onSuccess = setting.onSuccess ?? this.onSuccess
        let onError = setting.onError ?? this.onError

        return {
            onSuccess,
            onError
        }
    }

    url(routeName, params = {}) {
        return this.router.url(routeName, params)
    }

    methodOf(routeName) {
        return this.router.methodOf(routeName)
    }

    onError(err) {
        throw err
    }

    onSuccess(response) {
        return response.data
    }

    setErrorByCode(setErrors, code) {
        return (err) => {
            if (err.response.status !== code) {
                throw err
            }
            setErrors(err.response.data.errors)
        }
    }

    pushStateByCode(state, code) {
        return (err) => {
            const router = new useRouter()
            if (err.response.status !== code) {
                throw err
            }
            router.push(state)
        }
    }
}
