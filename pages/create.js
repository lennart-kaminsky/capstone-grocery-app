import { useRouter } from "next/router";
import { useState } from "react";
import { addProduct } from "@/utils/productUtils";
import { useSession } from "next-auth/react";
import defaultImageURL from "@/public/images/defaultImageURL";
import styled from "styled-components";
import ProductForm from "@/components/Forms/ProductForm";
import ProductImage from "@/components/ProductImage";
import LottieFile from "@/components/LottieFile";

import Head from "next/head";

const StyledMainWithPaddingBottom = styled.main`
  padding-bottom: 180px;
`;

export default function CreateProduct() {
  const router = useRouter();
  const { data: session } = useSession();

  const [currentImageURL, setCurrentImageURL] = useState(defaultImageURL);
  function handleSetCurrentImageURL(url) {
    setCurrentImageURL(url);
  }

  async function createProduct(newProduct) {
    await addProduct(newProduct);
    router.push("/");
  }
  if (!session)
    return (
      <main>
        <LottieFile variant="error" />;
      </main>
    );
  return (
    <>
      <Head>
        <title key="title">My Grocery | Create Product</title>
        <meta
          property="og:title"
          content="My Grocery | Create Product"
          key="og-title"
        />
      </Head>
      <StyledMainWithPaddingBottom>
        <ProductImage imageSrc={currentImageURL} />
        <h2>New Product</h2>
        <ProductForm
          currentImageURL={currentImageURL}
          onSubmit={createProduct}
          onSetCurrentImageURL={handleSetCurrentImageURL}
        />
      </StyledMainWithPaddingBottom>
    </>
  );
}
