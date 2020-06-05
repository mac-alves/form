import styled from 'styled-components';

export declare type InputStyleProps = {
    height: number;
}

export const Container = styled.div<InputStyleProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const InputField = styled.input<InputStyleProps>`
    height: ${props => props.height + 'px'};
    width: 100%;
    padding: 5px;
    padding-left: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.3);
    font-size: 20px;
    color: #ccc;
    transition: all 0.3s linear;
    border-radius: 5px;

    ::-webkit-input-placeholder{
        color: #326e53;
    }

    :-moz-placeholder { /* Firefox 18- */
        color: #326e53;
    }

    ::-moz-placeholder {  /* Firefox 19+ */
        color: #326e53;
    }

    :-ms-input-placeholder{
        color: #326e53;
    }

    &:focus{
        border: 2px solid #43b581;
    }
`;

export const Error = styled.span`
    color: #f2c7a8;
    width: 100%;
    height: 20px;
`;