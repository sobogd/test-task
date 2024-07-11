import { ProductCard } from "../../../entities/product";
import { ProductCardBody } from "../../../entities/product/ui/product-card-body";
import {
  EditProductButton,
  EditProductForm,
  useEditProduct,
} from "../../../features/product/edit-product";
import {
  ProductList,
  useProductList,
} from "../../../features/product/product-list";
import { RemoveProductButton } from "../../../features/product/remove-product";

export function ProductCardList() {
  const {
    data: { list: products },
    updateProduct,
    removeProduct,
  } = useProductList();

  const {
    data: { input: editProductInput },
    updateInput: updateEditProductInput,
  } = useEditProduct();

  const editingProductId = editProductInput?.id ?? null;

  return (
    <ProductList
      products={products}
      renderProduct={(product) => {
        const isEditing = editingProductId === product.id;
        return (
          <ProductCard
            product={product}
            body={
              <div>
                {isEditing ? (
                  <EditProductForm />
                ) : (
                  <ProductCardBody product={product} />
                )}
              </div>
            }
            editButton={
              <EditProductButton
                isEditing={isEditing}
                startEdit={() => {
                  updateEditProductInput({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                  });
                }}
                endEdit={() => {
                  if (editProductInput) {
                    updateProduct(editProductInput);
                    updateEditProductInput(null);
                  }
                }}
                onClick={() => {
                  updateEditProductInput({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                  });
                }}
              />
            }
            removeButton={
              <RemoveProductButton onClick={() => removeProduct(product.id)} />
            }
            key={product.id}
          />
        );
      }}
    />
  );
}
