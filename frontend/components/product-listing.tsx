import Image from "next/image";

interface Product {
  id: string;
  name: string;
  model: string;
  image: string;
  specs: string[];
  applications: string[];
  features: string[];
}

export function ProductListing({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
          <div className="mb-4 flex justify-center">
            <Image src={product.image} alt={product.name} width={300} height={200} className="object-contain rounded" />
          </div>
          <h3 className="text-xl font-bold mb-2">{product.name}</h3>
          <div className="text-gray-600 mb-2">型号: {product.model}</div>
          <ul className="mb-2 text-sm text-gray-700 list-disc list-inside">
            {product.specs.map((spec, idx) => (
              <li key={idx}>{spec}</li>
            ))}
          </ul>
          <div className="mb-2">
            <span className="font-semibold">应用场景：</span>
            {product.applications.join("、")}
          </div>
          <div>
            <span className="font-semibold">产品特性：</span>
            {product.features.join("、")}
          </div>
        </div>
      ))}
    </div>
  );
} 