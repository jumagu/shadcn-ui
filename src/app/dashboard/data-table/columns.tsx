"use client";

import { ColumnDef, FilterFn, Row, SortDirection } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { toast } from "sonner";
import { type Payment } from "@/data/payments.data";
import {
  CaretUpIcon,
  CaretDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";

const myCustomFilterFn: FilterFn<Payment> = (
  row: Row<Payment>,
  columnId: string,
  filterValue: string,
  addMeta: (meta: any) => void
) => {
  filterValue = filterValue.toLowerCase();

  const parts = filterValue.split(" ");

  const rowValues =
    `${row.original.email} ${row.original.status} ${row.original.clientName}`.toLowerCase();

  return parts.every((part) => rowValues.includes(part));
};

const SortIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
  if (!isSorted) return null;

  return isSorted === "asc" ? (
    <CaretUpIcon className="ml-2 h-4 w-4" />
  ) : (
    <CaretDownIcon className="ml-2 h-4 w-4" />
  );
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="ml-4"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "clientName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Client Name
          {/* <CaretSortIcon className="ml-2 h-4 w-4" /> */}
          <SortIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          {/* <CaretSortIcon className="ml-2 h-4 w-4" /> */}
          <SortIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      const variant =
        {
          success: "success",
          failed: "destructive",
          processing: "info",
          pending: "secondary",
        }[status] ?? ("default" as any);

      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          {/* <CaretSortIcon className="ml-2 h-4 w-4" /> */}
          <SortIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "email",
    filterFn: myCustomFilterFn,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          {/* <CaretSortIcon className="ml-2 h-4 w-4" /> */}
          <SortIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id);
                toast.success("Payment ID copied to clipboard", {
                  duration: 1500,
                  position: "top-right",
                });
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
