import { ProductCardBodyStyled } from "../../../styled/ProductCardBody";
import { TProduct } from "../types";

type ProductCardBodyProps = {
  product: TProduct;
};

export function ProductCardBody({ product }: ProductCardBodyProps) {
  return (
    <>
      <span>{product.name}</span>
      <span>{product.price} RUB</span>
      <br />
    </>
  );
}
