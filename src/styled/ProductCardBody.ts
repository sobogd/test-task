import styled from "@emotion/styled";

export const ProductCardBodyStyled = styled.div(() => ({
  "div, form": {
    display: "flex",
    width: "100%",
    gap: 10,
    span: {
      display: "inline-block",
      "::first-of-type": {
        color: "gray",
        width: "100px",
      },
      ":last-child": {
        "::before": {
          content: "'- '",
        },
        color: "red",
        width: "100px",
      },
    },
    input: {
      display: "inline-block",
      ":first-of-type": {
        color: "gray",
        width: "100px",
      },
      ":last-child": {
        "::after": {
          content: "'RUB'",
        },
        color: "red",
        width: "100px",
      },
    },
  },
}));
