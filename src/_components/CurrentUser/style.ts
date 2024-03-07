import styled from "styled-components";

export const UserImageSty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
    }
`

export const CurrentUserSty = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    

    span{
        font-weight: bold;
    }

    a{
        font-weight: bold;
        color: ${prop=>prop.theme.primary};
        border-radius: 8px;
        border: 1px solid ${prop=>prop.theme.contrast};
        padding: 4px;
        transition: 0.5s;

        &:hover{
            background-color: ${prop=>prop.theme.contrastLight};
        }
    }
`