import styled from 'styled-components';
import { Form as FormWeb } from '@unform/web';

export const Container = styled.div`
    width: 50%;
    margin: auto;
    position: relative;
    top: 100px;
    padding: 20px;
    background-color: #36393f;
    border: 1px solid #faa61a;
    box-shadow: 0 0 6px rgba(250,166,26,.3);
    border-radius: 5px;
`;

export const Form = styled(FormWeb)`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr; /* 1fr -> 1flex */
    grid-template-rows: 3fr 80px;
    gap: 2px;
    grid-template-areas:
        "file    camps"
        "footer  footer"
    ;
`;

export const Files = styled.div`
    grid-area: file;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > div:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const Fields = styled.div`
    grid-area: camps;

    & > div:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const Camps = styled.div`
    width: 100%;
    display: flex;

    & > div:not(:last-child) {
        margin-right: 20px;
    }
`;

export const Footer = styled.div`
    grid-area: footer;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    position: relative;

    &::before{
        content: "";
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: #ccc;
        top: 20px;
        opacity: 0.2;
    }
`;

export const Submit = styled.button.attrs(props => ({type: "submit"}))`
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.3s linear;
    border: 1px solid #234;
    color: #fff;
    background-color: #43b581;
    border-radius: 5px;

    &:hover {
        background-color: #569779;
    }
`;