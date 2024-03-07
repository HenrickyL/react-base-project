import { useState } from "react";
import { AuthBase, Content } from ".."
import { Form } from "../../../_components/Form";
import { Input } from "../../../_components/Input";
import { LoginDivSty, LoginSty } from "../style"
import { MdLogin as LoginIcon} from "react-icons/md";
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import { StateController } from "../../../_middlewares/StateController";
import { useNavigate } from "react-router-dom";

interface SignUpProp{
    setEmail: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
}

const SignUp = ({setEmail, setPassword}: SignUpProp)=>{

    return(
        <>
            <Form.Field id="1">
                <Input.Root>
                    <Input.Field>
                        <Input.Icon icon={EmailIcon} />
                        <Input.Input id="email" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                    </Input.Field>
                </Input.Root>
            </Form.Field>
            <Form.Field id="2">
                    <Input.Root>
                        <Input.Password placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </Input.Root>
            </Form.Field>
        </>
    )
}


const loginContent : Content = {
    icon: LoginIcon,
    title: 'Login',
    toText: 'sign-up',
    buttonTitle: 'Sign-in',
    to: '/auth/signup'
}


export const Login = ()=>{
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate()

    function HandleLogin(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const result = StateController.login({
            email,
            password
        })
        if(result == null)
            setError(true)
        else{
            navigate('/')
        }
    }
    return(
        <LoginSty>
            <LoginDivSty>
                <AuthBase 
                    content={loginContent} 
                    Component={<SignUp setEmail={setEmail} setPassword={setPassword} />} 
                    handleSubmit={HandleLogin} />
            </LoginDivSty>
            {!error || <span >invalid email or password</span>}
        </LoginSty> 
    )
}