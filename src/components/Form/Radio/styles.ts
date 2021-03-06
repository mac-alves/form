import styled from 'styled-components';

export declare type InputStyleProps = {
    height: number;
}

export const Container = styled.div`
    width: 100%;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
`;

export const Labels = styled.div<InputStyleProps>`
    display: flex;
    align-items: center;
    height: ${props => props.height + 'px'};

    & > label:not(:last-child){
        margin-right: 15px;
    }
`;

export const Label = styled.label`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`

export const InputField = styled.input`
    display: none;

    &:checked ~ div {
        border: 3px solid #43b581;
    }

    &:checked ~ div::before{
        background: #43b581;
    }

    &:checked ~ p{
        color: #43b581;
    }
`;

export const Check = styled.div`
    border: 3px solid #AAAAAA;
    height: 24px;
    width: 24px;
    transition: border .25s linear;
    -webkit-transition: border .25s linear;
    position: relative;
    border-radius: 12px;
    top: 0;
    left: 0;

    &::before{
        content: "";
        position: absolute;
        border-radius: 6px;
        height: 12px;
        width: 12px;
        top: calc(50% - 6px);
        left: calc(50% - 6px);
        margin: auto;
        transition: background 0.25s linear;
        -webkit-transition: background 0.25s linear;
    }
`;

export const Msg = styled.p`
    margin: 0;
    margin-left: 5px;
    font-size: 1rem;
`
export const Error = styled.span`
    color: #f2c7a8;
    width: 100%;
    height: 20px;
`;