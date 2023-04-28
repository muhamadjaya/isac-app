export default class APIException extends Error {
    constructor(errorAxios) {
        super(errorAxios.message)

        const response = errorAxios.response
        const data = response.data

        this.success =  false,
        this.message =  data?.message ?? error.message ?? data?.statusText
        this.status =  response.status
        this.errors =  data?.errors ?? {}

    }

    setFormikErrors(setFieldError) {
        if (this.status === 422) {
            for (const field in this.errors) {
                if (Object.hasOwnProperty.call(this.errors, field)) {
                    const errors = this.errors[field];
                    setFieldError(field, errors)
                }
            }
        }
    }
}
