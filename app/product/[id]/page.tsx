import ClientPage from "./ClientPage";

export function generateStaticParams() {
  return Array.from({ length: 50 }, (_, index) => ({
    id: String(index + 1),
  }));
}

export default function Page() {
  return <ClientPage />;
}
