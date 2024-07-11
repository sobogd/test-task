import { ReactNode } from "react";
import { TProduct } from "../types";
import { ProductCardStyled } from "../../../styled/ProductCardStyled";
import { ProductCardActionsStyled } from "../../../styled/ProductCardActionsStyled";
import { ProductCardBodyStyled } from "../../../styled/ProductCardBody";

type ProductCardProps = {
  product: TProduct;
  body: ReactNode;
  editButton: ReactNode;
  removeButton?: ReactNode;
};

export function ProductCard({
  body,
  editButton,
  removeButton,
}: ProductCardProps) {
  return (
    <ProductCardStyled>
      <ProductCardBodyStyled>{body}</ProductCardBodyStyled>
      <ProductCardActionsStyled>
        {editButton}
        {removeButton}
      </ProductCardActionsStyled>
    </ProductCardStyled>
  );
}
