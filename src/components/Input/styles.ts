import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 10px;
    width: 100%;
`;

export const InputField = styled.input`
    /* height: 50px; */
    width: 100%;
    padding: 5px;
    padding-left: 10px;
    margin-bottom: 5px;
    background-color: transparent;
    border: 2px solid rgba(3, 229, 168, 0.3);
    font-size: 20px;
    color: #03e5a8;
    transition: all 0.3s linear;
    height: ${props => props.height + 'px'};

    ::-webkit-input-placeholder{
        color: rgb(3, 229, 168, 0.6);
    }

    :-moz-placeholder { /* Firefox 18- */
        color: rgb(3, 229, 168, 0.6);
    }

    ::-moz-placeholder {  /* Firefox 19+ */
        color: rgb(3, 229, 168, 0.6);
    }

    :-ms-input-placeholder{
        color: rgb(3, 229, 168, 0.6);
    }

    &:focus{
        border: 2px solid rgba(3, 229, 168, 1);
    }
`;

export const Error = styled.span`
    color: #f2c7a8;
`;