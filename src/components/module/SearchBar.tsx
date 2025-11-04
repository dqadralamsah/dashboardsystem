'use client';
import { Input, Space } from 'antd';
import { useState, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(search);
    }, 300); // debounce 300ms

    return () => clearTimeout(handler);
  }, [search]);

  return (
    <Space.Compact>
      <Input.Search
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        allowClear
      />
    </Space.Compact>
  );
}
