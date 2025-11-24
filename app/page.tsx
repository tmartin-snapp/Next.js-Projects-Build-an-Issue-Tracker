import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <Pagination itemCount={200} pageSize={20} currentPage={1} />
  )
}
