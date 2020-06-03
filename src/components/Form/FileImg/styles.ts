import styled from 'styled-components';

export const Container = styled.div`
    width: 200px;
    height:200px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    border: 1px solid #faa61a;
    border-radius: 50px;
    position: relative;

    input {
        display: none
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    &:hover {
        img {
            opacity: 0.5;
        }

        label{
            display: flex;
            animation: fade-in 0.5s;
        }
    }

    &:not(:hover) label.did-fade-in{
        display: flex;
        animation: fade-out 0.5s;
    }
`;

export const Img = styled.img`
    max-width:196px;
    max-height:196px;
    width: auto;
    height: auto;
    z-index: 0;
    position: absolute;
    transition: all 0.3s linear;
    border-radius: 50px;
`;

export const Label = styled.label`
    color: #04dca5;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    display: none;
    border-radius: 50px;
`;

export const Error = styled.span`
    position: absolute;
    top: 0;
    color: #f2c7a8;
`;