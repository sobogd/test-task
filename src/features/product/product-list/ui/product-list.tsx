import { ProductListStyled } from "../../../../styled/ProductListStyled";
import { TProduct } from "../../../../entities/product/types";
import { ReactNode } from "react";

type ProductListProps = {
  products: TProduct[];
  renderProduct: (
    value: TProduct,
    index: number,
    array: TProduct[]
  ) => ReactNode;
};

export function ProductList({ products, renderProduct }: ProductListProps) {
  return <ProductListStyled>{products.map(renderProduct)}</ProductListStyled>;
}
