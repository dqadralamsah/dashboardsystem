'use client';
import { Table, Button, Space, Tooltip } from 'antd';
import { Product } from '@/types/product';

interface ProductsTableProps {
  products: Product[];
  loading: boolean;
  page: number;
  total: number;
  onChangePage: (page: number) => void;
  onEdit: (product: Product) => void;
  // onDelete: (product_id: string) => void;
}

export default function ProductsTable({
  products,
  loading,
  page,
  total,
  onChangePage,
  onEdit,
}: ProductsTableProps) {
  const columns = [
    {
      title: 'Image',
      dataIndex: 'product_image',
      key: 'image',
      render: (url: string) =>
        url ? (
          <img src={url} alt="img" style={{ width: 50, height: 50, objectFit: 'cover' }} />
        ) : null,
    },
    { title: 'Title', dataIndex: 'product_title', key: 'title' },
    {
      title: 'Price',
      dataIndex: 'product_price',
      key: 'price',
      render: (price: number) =>
        price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
    },
    { title: 'Category', dataIndex: 'product_category', key: 'category' },
    {
      title: 'Description',
      dataIndex: 'product_description',
      key: 'description',
      render: (desc: string) => (
        <Tooltip title={desc}>{desc?.length > 50 ? desc.slice(0, 50) + '...' : desc}</Tooltip>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Product) => (
        <Space>
          <Button type="primary" onClick={() => onEdit(record)}>
            Edit
          </Button>
          {/* <Button danger onClick={() => onDelete(record.product_id)}>
            Delete
          </Button> */}
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={products}
      rowKey="product_id"
      pagination={{ current: page, pageSize: 10, total, onChange: onChangePage }}
      loading={loading}
    />
  );
}
