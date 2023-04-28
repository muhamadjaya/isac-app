export default class ResponseFormat {
    constructor(response) {
        this.success = true
        this.message = response?.data?.message ?? response?.statusText
        this.data = response?.data ?? []
        this.errors = []
        this.status = response.status
    }
};
