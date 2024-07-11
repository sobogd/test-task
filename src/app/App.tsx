import { EditProductProvider } from "../features/product/edit-product";
import {
  ProductGridContainer,
  ProductListProvider,
} from "../features/product/product-list";
import { ProductCardList } from "../widgets/product-card-list";
import { Title } from "../styled/Title";

export default function App() {
  return (
    <>
      <Title>Редактирование курсов валют</Title>
      <ProductGridContainer>
        <EditProductProvider>
          <ProductListProvider>
            <ProductCardList />
          </ProductListProvider>
        </EditProductProvider>
      </ProductGridContainer>
    </>
  );
}
