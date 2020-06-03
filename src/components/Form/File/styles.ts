import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    
`;

export const Label = styled.label`
    color: #04dca5;
    width: 100%;
    display: flex;
    cursor: pointer;

    input {
        display: none;
    }
`;

export const Msg = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 10px;

    p{
        margin-left: 10px;
        display: inline-block;
        white-space: nowrap;
        max-width:180px;
        overflow: hidden !important;
        text-overflow: ellipsis;
    }
`;