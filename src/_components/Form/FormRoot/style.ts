import styled from "styled-components";

export const FormRootSty = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${prop=> prop.theme.contrast};
    padding: 1rem;
    border-radius: 8px;
    gap: 16px;
`