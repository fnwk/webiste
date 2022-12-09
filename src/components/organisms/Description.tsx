import styled from "styled-components";
import { DescriptionContent } from "../atoms/Description/DescriptionContent";

const Description = () => {
    return (
      <DescriptionStyled>
        <DescriptionContent />
      </DescriptionStyled>
    );
};

export default Description;

const DescriptionStyled = styled.div`
    display: flex;
    background: #09032D;
    width: 100%;
`;