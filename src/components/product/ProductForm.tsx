'use client';
import { Form, Input, InputNumber } from 'antd';
import { Product } from '@/types/product';

interface ProductFormProps {
  form: any;
  initialValues?: Product | null;
  onFinish: (values: any) => void;
}

export default function ProductForm({ form, initialValues, onFinish }: ProductFormProps) {
  return (
    <Form form={form} layout="vertical" initialValues={initialValues || {}} onFinish={onFinish}>
      <Form.Item
        name="product_title"
        label="Title"
        rules={[{ required: true, message: 'Please enter product title' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="product_price"
        label="Price"
        rules={[{ required: true, message: 'Please enter product price' }]}
      >
        <InputNumber min={0} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item name="product_description" label="Description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="product_category" label="Category">
        <Input />
      </Form.Item>

      <Form.Item name="product_image" label="Image URL">
        <Input />
      </Form.Item>
    </Form>
  );
}
