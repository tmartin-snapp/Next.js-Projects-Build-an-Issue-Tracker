import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <Pagination
      itemCount={200}
      pageSize={20}
      currentPage={parseInt(searchParams.page)}
    />
  );
}
