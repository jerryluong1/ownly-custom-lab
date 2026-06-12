import ClientPage from "./ClientPage";

export function generateStaticParams() {
  return [
    { slug: "11-hang-gai" },
  ];
}

export default function Page() {
  return <ClientPage />;
}
