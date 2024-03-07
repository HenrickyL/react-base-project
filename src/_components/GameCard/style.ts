import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid ${prop=>prop.theme.contrast};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  min-width: 300px;
  img{
    width: 100%;
    max-height: 8rem;
    object-fit: cover;
    object-position: top;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Category = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
`;