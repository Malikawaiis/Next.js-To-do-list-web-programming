import { NextResponse } from 'next/server';

const products = [
  { id: '1', name: 'Laptop', description: 'A high-performance laptop for professionals.' },
  { id: '2', name: 'Smartphone', description: 'A modern smartphone with an excellent camera.' },
  { id: '3', name: 'Headphones', description: 'Noise-cancelling over-ear headphones.' },
  { id: '4', name: 'Smartwatch', description: 'Track your health and stay connected on the go.' },
  { id: '5', name: 'Tablet', description: 'Lightweight and powerful tablet for productivity.' },
  { id: '6', name: 'Gaming Console', description: 'Next-gen gaming console with 4K support.' },
  { id: '7', name: 'Bluetooth Speaker', description: 'Portable speaker with high-fidelity sound.' },
  { id: '8', name: 'Wireless Mouse', description: 'Ergonomic mouse with long battery life.' },
  { id: '9', name: 'Mechanical Keyboard', description: 'RGB keyboard for gaming and typing.' },
  { id: '10', name: 'Webcam', description: 'HD webcam for video calls and streaming.' },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}
