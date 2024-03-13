import { useFormik } from "formik";
import { Form } from "../../_components/Form"
import { Input } from "../../_components/Input"
import { LoginSty } from "./style"
import { IoMdMail as MailIcon } from "react-icons/io";

export const Login = ()=>{

    const form = useFormik<{name: string}>({
        initialValues: {
            name: '',
        },
        // validationSchema,
        onSubmit: async () => {
           
        }
    });

    return(
        <LoginSty>
            <h1>Login</h1>
            <Form.Root form={form}>
                <Input.Root>
                    <Input.Field>
                        <Input.Icon icon={MailIcon}/>
                        <Input.Input placeholder="Email"/>
                    </Input.Field>
                </Input.Root>

                <Input.Root>
                    <Input.Field>
                        <Input.Password placeholder="Password"/>
                    </Input.Field>
                </Input.Root>
            </Form.Root>
        </LoginSty>
    )
}