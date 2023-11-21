import styled from "styled-components";
import Link from "next/link";
import DeleteConfirmation from "../DeleteConfirmation";

const StyledListItem = styled.li`
  margin-block: 7px;
  width: 100%;
  background-color: var(--secondaryBackgroundColor);
  border-radius: 5px;
  box-shadow: 0px 1px 3px var(--primaryDarkColor);
`;

const StyledLink = styled(Link)`
  display: inline-block;
  width: 85%;
  padding: 10px;
  text-decoration: none;
  color: var(--primaryDarkColor);
  &:hover {
    cursor: pointer;
  }
`;

export default function ProductListItem({ product, onDeleteProduct }) {
  return (
    <StyledListItem>
      <StyledLink href={`/products/${product._id}`}>{product.name} </StyledLink>
      <DeleteConfirmation product={product} onDeleteProduct={onDeleteProduct} />
    </StyledListItem>
  );
}
