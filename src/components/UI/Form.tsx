import styled from 'styled-components';
import { device } from "./Devices";


export const Input = styled.input`
    height: auto;
    width: 100%;
    padding: 0.95em;
    background: rgba(207, 216, 234, 0.3);
    border: 1px solid #CFD8EA;
    box-sizing: border-box;
    border-radius: 2px;

`;


export const FormContainer = styled.div`
    width: 80%;
    margin: 0 auto;

    @media ${device.laptop} {
        width: 70%;
        margin: 0;

    }

`;
