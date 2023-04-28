export const setValue = (element, data, setData) => {
    const name = element.target.name
    const value = element.target.value
    setData({
        ...data,
        [name]: value
    })
}

export const setErrorPropsWhen = (isError, props, attr = { color: "failure" }) => {
    if (isError) Object.assign(props, attr)
}
