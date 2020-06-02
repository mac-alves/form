import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const InputField = styled.input`
    /* height: 50px; */
    width: 100%;
    padding: 5px;
    padding-left: 10px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.3);
    font-size: 20px;
    color: #ccc;
    transition: all 0.3s linear;
    height: ${props => props.height + 'px'};
    border-radius: 5px;

    ::-webkit-input-placeholder{
        color: #43b581;
    }

    :-moz-placeholder { /* Firefox 18- */
        color: #43b581;
    }

    ::-moz-placeholder {  /* Firefox 19+ */
        color: #43b581;
    }

    :-ms-input-placeholder{
        color: #43b581;
    }

    &:focus{
        border: 2px solid #43b581;
    }
`;

export const Error = styled.span`
    color: #f2c7a8;
`;