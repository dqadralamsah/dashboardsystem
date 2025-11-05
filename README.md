# Frontend Technical Test — Product Dashboard

Program sederhana **Product Management Dashboard** dengan Next.js 14 (TypeScript)
implementasi CRUD dengan API ke Backend Service

## Tech Stack

Frontend: [Next.js 14 (App Router)](https://nextjs.org/)
UI Library: [Ant Design](https://ant.design/)
Language: TypeScript
HTTP Client: Axios
Backend (API Proxy Target): Express + SQLite
State: useState, useEffect (React Hooks)

## Folder Structure

front-end/
├── app/
│ ├── products/
│ │ ├── page.tsx # Product list page (Antd Table)
│ │ ├── ProductModal.tsx # Modal for Create & Edit
│ │ └── ProductForm.tsx # Form fields used by modal
│ └── api/
│ └── product/route.ts # GET, POST, PUT, DELETE proxy routes
│ └── products/route.ts # List products with pagination/search
├── utils/
│ └── axiosClient.ts # Axios instance configuration
├── components/
│ └── SearchBox.tsx # Debounced search input
├── package.json
└── tsconfig.json

## Getting Started

Install Dependencies
`npm install`

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Buka [http://localhost:3000](http://localhost:3000)

## API Endpoint

/api/products | GET | /api/web/v1/products | List Produk + Pagination dan Pencarian
/api/product | GET | /api/web/v1/product | Single Product
/api/product | POST | /api/web/v1/product | Create new product
/api/product | PUT | /api/web/v1/product | Update existing product

Name: Diqaaall
Role: Frontend Developer (Technical Test Submission)
Stack: Next.js | TypeScript | Ant Design | Axios
