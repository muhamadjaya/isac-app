const LoopRender = ({ render, data = [], include = null }) => {
    return (
        <>
            {
                data.map((value, index) => {
                    return render(value, index, include)

                })
            }
        </>
    )
}

export default LoopRender
