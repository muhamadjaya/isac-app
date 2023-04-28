import collect from "collect.js"
import { useState } from "react"
import LazyInput from "./LazyInput"

const initState = (fields = {}, data = {}) => {
    let state = {}
    let emptyState = {}
    let keys = Object.keys(fields)

    keys.forEach((name) => {
        Object.assign(state, {
            [name]: data[name] ?? ""
        })
        Object.assign(emptyState, {
            [name]: ""
        })
    })

    return {
        state, emptyState
    }
}

const createFieldComponents = (fields, formData, setFormData, validation = {}) => {
    let fieldComponents = {}
    for (const name in fields) {
        if (Object.hasOwnProperty.call(fields, name)) {
            const props = fields[name]
            const errors = validation[name] ?? []
            Object.assign(fieldComponents, {
                [name]: (
                    <div key={name}>
                        <LazyInput
                            name={name}
                            value={formData[name]}
                            setForm={setFormData}
                            form={formData}
                            errors={errors}
                            {...props}
                        />
                    </div>
                )
            })
        }
    }
    return fieldComponents
}

const useLazyFields = (formFields, initialData, validationErrors) => {
    const { state, emptyState } = initState(formFields, initialData)
    const [formData, setFormData] = useState(state)

    const allComponents = createFieldComponents(formFields, formData, setFormData, validationErrors)
    const resetForm = () => setFormData(emptyState)
    const fields = (fieldName) => {
        return collect(allComponents)
            .only(fieldName)
            .values()
            .all()
    }
    const allFields = Object.values(allComponents)

    return {
        allFields,
        formData,
        setFormData,
        resetForm,
        fields,
    }
}

export default useLazyFields
