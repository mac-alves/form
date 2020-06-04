import styled from 'styled-components';

export declare type InputStyleProps = {
    height: number;
}

export const Container = styled.div<InputStyleProps>`
    height: ${props => props.height}px;
    width: 100%;
    display: flex;
`;

// .attrs(props => ({type: "range"}))
export const InputField = styled.input`
    width: 100%;
    height: 35px;
    -webkit-appearance: none;
    margin: 10px 0;
    background-color: transparent;

    &:focus {
        outline: none;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #43b581;
        border-radius: 5px;
        border: 0px solid #000000;
    }

    &::-webkit-slider-thumb {
        box-shadow: 0px 0px 1px #43b581;
        border: 0px solid #43b581;
        height: 28px;
        width: 14px;
        border-radius: 5px;
        background: #FFFFFF;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -9.5px;
    }

    &:focus::-webkit-slider-runnable-track {
        background: #43b581;
    }

    &::-moz-range-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        animate: 0.2s;
        box-shadow: 0px 0px 0px #000000;
        background: #43b581;
        border-radius: 5px;
        border: 0px solid #000000;
    }

    &::-moz-range-thumb {
        box-shadow: 0px 0px 1px #43b581;
        border: 1px solid #43b581;
        height: 28px;
        width: 14px;
        border-radius: 5px;
        background: #FFFFFF;
        cursor: pointer;
    }

    &::-ms-track {
        width: 100%;
        height: 10px;
        cursor: pointer;
        animate: 0.2s;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }

    &::-ms-fill-lower {
        background: #43b581;
        border: 0px solid #000000;
        border-radius: 10px;
        box-shadow: 0px 0px 0px #000000;
    }

    &::-ms-fill-upper {
        background: #43b581;
        border: 0px solid #000000;
        border-radius: 10px;
        box-shadow: 0px 0px 0px #000000;
    }

    &::-ms-thumb {
        margin-top: 1px;
        box-shadow: 0px 0px 1px #43b581;
        border: 1px solid #43b581;
        height: 28px;
        width: 14px;
        border-radius: 5px;
        background: #FFFFFF;
        cursor: pointer;
    }

    &:focus::-ms-fill-lower {
        background: #000;
    }

    &:focus::-ms-fill-upper {
        background: #000;
    }
`;