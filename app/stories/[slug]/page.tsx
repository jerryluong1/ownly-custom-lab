import ClientPage from "./ClientPage";

export function generateStaticParams() {
  return [
    { slug: "11-hang-gai" },
    { slug: "noi-nang-ve-xuong-che-tac" },
    { slug: "viet-ve-kinh-mat-ha-noi" },
    { slug: "nghe-thuat-danh-bong-acetate" },
    { slug: "tu-ban-ve-den-gong-kinh" },
  ];
}

export default function Page() {
  return <ClientPage />;
}
