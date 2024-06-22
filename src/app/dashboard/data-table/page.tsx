import { columns } from "./columns";
import { DataTable } from "./data-table";
import { payments } from "@/data/payments.data";

async function fetchData() {
  return payments;
}

export default async function DataTablePage() {
  const data = await fetchData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
