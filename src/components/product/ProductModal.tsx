'use client';
import { Modal, Form, message } from 'antd';
import { Product } from '@/types/product';
import ProductForm from './ProductForm';

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
  editingProduct: Product | null;
}

export default function ProductModal({
  open,
  onClose,
  onSubmit,
  editingProduct,
}: ProductModalProps) {
  const [form] = Form.useForm();

  const handleFinish = async (values: any) => {
    try {
      await onSubmit(values);
      message.success(
        editingProduct ? 'Product updated successfully' : 'Product created successfully'
      );
      form.resetFields();
      onClose();
    } catch (err) {
      console.error(err);
      message.error('Something went wrong!');
    }
  };

  return (
    <Modal
      title={editingProduct ? 'Edit Product' : 'Add Product'}
      open={open}
      onCancel={() => {
        form.resetFields();
        onClose();
      }}
      onOk={() => form.submit()}
      destroyOnClose
    >
      <ProductForm form={form} initialValues={editingProduct} onFinish={handleFinish} />
    </Modal>
  );
}
