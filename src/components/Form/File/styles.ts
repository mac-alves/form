import styled from 'styled-components';

export declare type InputStyleProps = {
    height: number;
    width: number;
}

export const Container = styled.div<InputStyleProps>`
    width: ${props => props.width + 'px'};
    display: flex;
    padding: 5px;
    padding-left: 14px;
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.3);
    font-size: 20px;
    color: #ccc;
    transition: all 0.3s linear;
    height: ${props => props.height + 'px'};
    border-radius: 5px;
    position: relative;
`;

export const Label = styled.label`
    color: #43b581;
    width: 100%;
    display: flex;
    cursor: pointer;

    input {
        display: none;
    }
`;

export const Msg = styled.div<InputStyleProps>`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    p{
        margin-left: 10px;
        display: inline-block;
        white-space: nowrap;
        max-width: ${props => (props.width - 15) + 'px'};
        overflow: hidden !important;
        text-overflow: ellipsis;
    }
`;

export const Error = styled.span`
    position: absolute;
    color: #f2c7a8;
    width: 100%;
    height: 20px;
    top: calc(100% + 3px);
    left: 0;
`;