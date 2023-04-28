const ComponentLoop = ({ component, data = [], format = null }) => {
    const Component = component
    const defaultProcess = (value) => value
    format = format ?? defaultProcess

    return (
        <>
            {
                data.map((value, index) => {
                    value = format(value)
                    return (<Component {...value} key={index} />)

                })
            }
        </>
    )
}

export default ComponentLoop
