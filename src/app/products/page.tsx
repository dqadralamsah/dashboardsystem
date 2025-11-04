'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product, ProductListParams } from '@/types/product';
import { message, Button } from 'antd';
import SearchBar from '@/components/module/SearchBar';
import ProductModal from '@/components/product/ProductModal';
import ProductsTable from '@/components/product/ProductTable';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Fetch ProductS
  const loadProducts = async () => {
    setLoading(true);
    try {
      const params: ProductListParams = {
        page,
        limit: 10,
        offset: (page - 1) * 10,
        search,
      };
      const res = await axios.get('/api/products', { params });

      setProducts(res.data.data || []);
      setTotal(res.data.pagination?.total || 0);
      setPage(res.data.pagination?.page || 1);
    } catch (err) {
      console.error(err);
      message.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [page, search]);

  // Add & Edit Product
  const handleSubmit = async (values: any) => {
    try {
      if (editingProduct) {
        await axios.put('/api/product', { product_id: editingProduct.product_id, ...values });
      } else {
        await axios.post('/api/products', values);
      }
      loadProducts();
      setModalOpen(false);
      setEditingProduct(null);
    } catch (err) {
      console.error(err);
      message.error('Action failed');
    }
  };

  // Delete Product
  // const handleDelete = async (product_id: string) => {
  //   try {
  //     await axios.delete(`/api/product?product_id=${product_id}`);
  //     message.success('Product deleted successfully');
  //     loadProducts();
  //   } catch (err) {
  //     console.error(err);
  //     message.error('Failed to delete product');
  //   }
  // };

  return (
    <div style={{ padding: 24 }}>
      {/* Search + Add */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <SearchBar
          onSearch={(value) => {
            setSearch(value);
            setPage(1);
          }}
        />
        <Button type="primary" onClick={() => setModalOpen(true)}>
          Create Product
        </Button>
      </div>

      {/* Products Table */}
      <ProductsTable
        products={products}
        loading={loading}
        page={page}
        total={total}
        onChangePage={setPage}
        onEdit={(product) => {
          setEditingProduct(product);
          setModalOpen(true);
        }}
        // onDelete={handleDelete}
      />

      {/* Modal Add/Edit */}
      <ProductModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingProduct(null);
        }}
        onSubmit={handleSubmit}
        editingProduct={editingProduct}
      />
    </div>
  );
}
