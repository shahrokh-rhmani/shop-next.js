import Layout from "@/components/Layout";
import data from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function ProductDetail() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((item) => item.slug === slug);
  
  if (!product) {
    return (
      <Layout title="Product Not Found">
        <div className="py-2">
          <Link href="/">back to products</Link>
        </div>
        <div className="text-center py-10">
          <div className="text-xl font-bold">Product Not Found</div>
        </div>
      </Layout>
    );
  }
  
  return (
    <div>
      <Layout title={product.name}>
        <div className="py-2">
          <Link href="/">back to products</Link>
        </div>
        <div className="grid md:grid-cols-4 md:gap-3">
          <div className="md:col-span-2">
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              layout="responsive"
            ></Image>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <h1 className="text-lg font-bold">{product.name}</h1>
              </li>
              <li>Category: {product.category}</li>
              <li>Brand: {product.brand}</li>
              <li>
                {product.rating} of {product.numReviews} reviews
              </li>
              <li>Description: {product.description}</li>
            </ul>
          </div>
          <div>
            <div className="card p-5">
              <div className="mb-2 flex justify-between">
                <div>Price</div>
                <div>{product.price} ₹</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? "In Stock" : "Unavailable"}
                </div>
              </div>
              <button className="primary-button w-full">Add to cart</button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}