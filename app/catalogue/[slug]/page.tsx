import ClientPage from "./ClientPage";

export function generateStaticParams() {
  return [
    { slug: "bst-acetate-nguyen-ban" },
    { slug: "bst-kim-loai-co-dien" },
    { slug: "bst-kinh-mat-dieu-khac-2024" },
  ];
}

export default function Page() {
  return <ClientPage />;
}
