import React, {useState} from 'react';
import styled from 'styled-components';
import {useForm} from 'react-hook-form'
import {Input} from "./Form.Styled";
import {Button} from "../Button/Button.Styled";
import {navigate} from "../../../lib/History";
import {Color, pxToRem} from "../../../lib/Styled";
import {useSelector} from "react-redux";
import FormInput from "./FormInput";
import {Message} from "../Text/Message.Styled";
import Login from "../../pages/Login/Login";

function Form(props) {

    const {
        topaz
    } = props;

    const {register, watch, errors, handleSubmit} = useForm();


    const [values, setValue] = useState({})
    const onSubmit = data => console.log("Login Button Click!!!", data);

    return (
        <Container onSubmit={onSubmit}>
            <LoginForm>
                <Login/>
            </LoginForm>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    span {
        color: ${Color.RED};
        font-size: 11px;
        font-weight: 300;
    }
`
const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
`;
export default Form;