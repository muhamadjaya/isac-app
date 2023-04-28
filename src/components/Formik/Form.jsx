import { Formik, Form as FormikForm } from "formik";

export default function Form({ setup, isLoading = false, children, ...props }) {
    return (
        <Formik enableReinitialize={true}  {...setup} {...props}>
            <FormikForm>
                {children}
            </FormikForm>
        </Formik>
    )
};
