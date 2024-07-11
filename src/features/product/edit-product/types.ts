import { TProduct } from "../../../entities/product/types";

export type TEditProductInput = Pick<TProduct, "id"> &
  Partial<Omit<TProduct, "id">>;

export type TEditProductFormValues = Omit<TProduct, "id">;
