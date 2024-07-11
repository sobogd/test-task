import { ProductList } from "../features/product/product-list";
import styled from "@emotion/styled";

export const ProductListStyled = styled.div(() => ({
  display: "flex",
  "flex-direction": "column",
  gap: 10,

  "*": {
    boxSizing: "border-box",
  },
}));
