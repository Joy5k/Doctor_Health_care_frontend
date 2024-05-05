import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";

type TFormProps = {
    children: React.ReactNode
    onSubmit:SubmitHandler<FieldValues>
    
}

const PHForms = ({ children, onSubmit }:TFormProps) => {
    const methods = useForm()
    const submit: SubmitHandler<FieldValues> = (data) => {
        onSubmit(data)
    }
    const {handleSubmit}=methods
    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submit)}>{ children}</form>
        </FormProvider>
    );
};

export default PHForms;