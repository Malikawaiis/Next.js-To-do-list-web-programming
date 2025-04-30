'use client';
//task1 and 2
import useSWR from 'swr';
import { useParams } from 'next/navigation';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function ProductPage() {
  const params = useParams();
  const id = params?.id;

  const { data: product, error } = useSWR(
    () => (id ? `/api/products/${id}` : null),
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
