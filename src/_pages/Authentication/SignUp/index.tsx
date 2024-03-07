import { AuthBase, Content } from ".."
import { Form } from "../../../_components/Form";
import { Input } from "../../../_components/Input";
import { MdOutlineAlternateEmail as EmailIcon } from "react-icons/md";
import {FaUser as UserIcon } from "react-icons/fa";
import { BiWorld, BiMap, BiCalendar as BirthIcon } from 'react-icons/bi';
import { SignUpDivSty, SignUpSty } from "./style";
import { useState } from "react";
import { StateController, User } from "../../../_middlewares/StateController";
import { useNavigate } from "react-router-dom";



interface SignUpContentProps{
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setFullName: React.Dispatch<React.SetStateAction<string>>;
    setBirthdate: React.Dispatch<React.SetStateAction<Date>>;
    setCountry: React.Dispatch<React.SetStateAction<string>>;
    setState: React.Dispatch<React.SetStateAction<string>>;
}
const SignUpContent = ({
    setEmail,
    setPassword,
    setFullName,
    setBirthdate,
    setCountry,
    setState
}: SignUpContentProps)=>{

    const handleBirthdateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const date = new Date(event.target.value);
        setBirthdate(date);
      };
    return(
        <>
        <Form.Field >
            <Input.Root>
                <Input.Field>
                    <Input.Icon icon={UserIcon} />
                    <Input.Input id="fullname" placeholder="Full Name" onChange={e => setFullName(e.target.value)}/>
                </Input.Field>
            </Input.Root>
        </Form.Field>

        <Form.Field >
            <Input.Root>
                <Input.Field>
                    <Input.Icon icon={BirthIcon} />
                    <Input.Input type="date" id="birthdate" placeholder="Date of Birth"
                        onChange={handleBirthdateChange}/>
                </Input.Field>
            </Input.Root>
        </Form.Field>

        <Form.Field >
            <Input.Root>
                <Input.Field>
                    <Input.Icon icon={EmailIcon} />
                    <Input.Input id="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                </Input.Field>
            </Input.Root>
        </Form.Field>

        <Form.Field >
                <Input.Root>
                    <Input.Password placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                </Input.Root>
        </Form.Field>

        <Form.FieldGroup>
            <Form.Field>
                <Input.Root>
                    <Input.Field>
                    <Input.Icon icon={BiWorld} /> 
                    <Input.Input id="country" placeholder="Country" onChange={e => setCountry(e.target.value)} />
                    </Input.Field>
                </Input.Root>
            </Form.Field>
            <Form.Field>
                <Input.Root>
                    <Input.Field>
                    <Input.Icon icon={BiMap} /> 
                    <Input.Input id="state" placeholder="State" onChange={e => setState(e.target.value)}/>
                    </Input.Field>
                </Input.Root>
            </Form.Field>
        </Form.FieldGroup>
        </>
    )
}

const signUpContent : Content = {
    icon: UserIcon,
    title: 'Sign Up',
    toText: 'login',
    buttonTitle: 'Sign-up',
    to: '/auth/login'
}


export const SignUp = ()=>{
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [birthdate, setBirthdate] = useState<Date>(new Date());
    const [error, setError] = useState<boolean>(false);
    const navigator = useNavigate()

    function HandleSignUp(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        StateController.addUser({
            email,
            username: fullName,
            password,
            imageUrl: 'https://picsum.photos/300/300',
            data:{
                birthdate,
                country,
                state,
                fullName
            }
        })
        navigator('/auth/login')
    }
    return(
        <SignUpSty>
            <SignUpDivSty>
                <AuthBase 
                    content={signUpContent} 
                    Component={<SignUpContent 
                        setBirthdate={setBirthdate}
                        setCountry={setCountry}
                        setEmail={setEmail}
                        setFullName={setFullName}
                        setPassword={setPassword}
                        setState={setState}/>}
                    handleSubmit={HandleSignUp}
                    />
            </SignUpDivSty>
        </SignUpSty> 
    )
}