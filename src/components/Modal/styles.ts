import styled from 'styled-components';

interface ContainerProps {
    open: boolean
}

export const Container = styled.div<ContainerProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.6);
    display: ${props => props.open ? 'flex' : 'none' };
    z-index: 1;
    justify-content: center;
    align-items: center;
`;


export const Content = styled.div`
    width: 500px;
    /* height: 600px; */
    background-color: #202225;
    display: flex;
    flex-direction: column;
    padding: 20px 0 0 0 ;
`;

export const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 300px;
    height: 400px;
    max-height: 500px;
    overflow: hidden;
    margin: 0 20px;
    background-color: #000;
    border-radius: 4px;
`;

export const Img = styled.img`
    max-height: 400px;
    height: auto;
    width: auto;
`;

export const Adjustment = styled.div`
    display: flex;
    padding: 20px 20px 0px 20px;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
`;

const Button = styled.button`
    background-color: #7289da;
    padding: 10px 15px;
    border: none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s linear;
    margin-left: 10px;
`;

export const Salvar = styled(Button)`
    background-color: #7289da;
    
    &:hover{
        background-color: #6d7fbc;
    }
`;

export const Cancelar = styled(Button)`
    background-color: transparent;
    
    &:hover{
        background-color: #2f3236;
    }
`;