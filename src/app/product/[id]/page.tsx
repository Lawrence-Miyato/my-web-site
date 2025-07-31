import { allProducts } from "@/lib/data/product";
import ProductDetailClient from "@/app/product/[id]/ProductDetailClient";

export function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetailClient id={params.id} />;
}
