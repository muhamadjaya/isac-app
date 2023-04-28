import _ from 'lodash'

export default class Router {
    constructor(routes) {
        this.routes = routes
    }

    resolveRoute(routeName, data = {}) {
        let route = this.routes[routeName]
        let path = route?.path ?? route
        let method = route?.method
        let query = []

        for (const key in data) {
            if (this.processableValue(data[key])) {
                const searchKey = `:${key}`
                const value = data[key]

                // if the path has like '/api/endpoint/:id'
                // replace the :id with value of data object
                if (path.includes(searchKey)) {
                    path = path.replace(searchKey, value)
                } else {
                    // otherwise consider it as search query
                    const queryString = encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
                    query.push(queryString)
                }
            }
        }

        query = query.length ? "?" + query.join("&") : ""
        path = path + query

        return {
            method,
            path
        }
    }

    processableValue(value) {
        return typeof value !== 'undefined' && value !== null
    }

    buildQueryString(queryObject = {}) {
        if (Object.keys(queryObject).length === 0 && queryObject.constructor === Object) {
            return ""
        }

        return Object.keys(queryObject).map(key => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(queryObject[key])
        }).join('&')
    }

    url(routeName, data = {}) {
        let { path } = this.resolveRoute(routeName, data)
        return path
    }

    methodOf(routeName) {
        let { method } = this.resolveRoute(routeName, {})
        return method
    }

    getNavigableItems(currentPath = null) {
        let routes =  _
            .chain(Object.values(this.routes))
            .filter((route) => route?.label)
            .sortBy(['group', 'label', 'order'])
            .forEach((route) => {
                route['active'] = this.isActive(currentPath, route.path)
                return route
            })
            .groupBy('group')
            .value()

        return Object.values(routes)
    }

    isActive(currentPath = "", activePath = "") {
        return currentPath.startsWith(activePath)
    }
}
