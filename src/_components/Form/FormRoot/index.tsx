import { ReactNode } from "react"
import { FormRootSty } from "./style"
import { FormikContextType } from "formik";

interface FormRootProps{
    children: ReactNode
    form: FormikContextType<any>
}

export const FormRoot = ({children, form, ...props}: FormRootProps)=>{
    return(
        <FormRootSty value={form} {...props}>
            {children}
        </FormRootSty>
    )
    
}