import styled from 'styled-components';

const FormComponent = styled.form`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;
`;

const LabelComponent = styled.label`
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    margin-right: 10px;
`;

const InputComponents = styled.input`
    margin: 10px 0;
    padding: 4px;
    border-radius: 4px;
    border: 2px solid #33333399;
    transition: 0.2s cubic-bezier(0.5, 0, 0.50, 0.95);
    &:focus {
        outline: none;
        border: 2px solid #000000;
        box-shadow: 0 0 6px 0px #00000066;
    }
`;

const SubmitButtonComponent = styled.button`
    padding: 6px 24px;
    font-weight: 700;
    border: none;
    background-color: #333333;
    color: #FFFFFF;
    cursor: pointer;
    margin: 10px 0;
    transition: 0.2s cubic-bezier(0.5, 0, 0.50, 0.95);
    &:hover {
        background-color: #000000;
    }
`;

const InputGroupComponent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

export {
    FormComponent,
    LabelComponent,
    InputComponents,
    InputGroupComponent,
    SubmitButtonComponent
};
