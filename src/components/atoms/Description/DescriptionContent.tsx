import styled from "styled-components";

export const DescriptionContent = () => {
  return (
    <DescriptionContentStyled>Hejo! witamy cię na <span>intersita.pl</span> - polskiej stronie internetowej zrzeszających fanów interu mediolanu</DescriptionContentStyled>
  )
}

const DescriptionContentStyled = styled.div`
    color: white;
    font-size: 48px;
    padding-block: 5%;
    padding-inline: 12%;
    line-height: 1.5;
    word-spacing: 2.5%;
    font-family: "Bebas Neue";

    span {
        color: #FFB803;
    }
`
