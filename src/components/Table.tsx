import DataTable from "react-data-table-component";

const columns = [
  {
    name: " Name Product",
    selector: (row: any) => row.productName,
    sortable: true,
  },
  {
    name: "Position",
    selector: (row: any) => row.location,
    sortable: true,
  },
  {
    name: "Datum",
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: "Anzahl",
    selector: (row: any) => row.quantity,
    sortable: true,
  },
  {
    name: " Prise",
    selector: (row: any) => row.totalPrice,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row: any) => row.status,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    productName: "Apple watch 3 series",
    location: "Stuttgart",
    date: "12.09.2025",
    quantity: "1",
    totalPrice: "€896",
    status: (
      <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">
          Geliefert
      </div>
    ),
  },
  {
    id: 2,
    productName: "Iphone 12 Pro",
    location: "  Heidelberg",
    date: "05.06.2025",
    quantity: "1",
    totalPrice: "€735",
    status: (
      <div className="bg-[#e9b434] rounded-full px-3 py-1 text-white">
        Unbekannt
      </div>
    ),
  },
  {
    id: 3,
    productName: "Apple watch 4 series",
    location: "Stuttgart",
    date: "12.09.2025",
    quantity: "1",
    totalPrice: "€896",
    status: (
      <div className="bg-[#f93c65] rounded-full px-3 py-1 text-white">
         Storniert
      </div>
    ),
  },
  {
    id: 4,
    productName: "Apple watch 3 series",
    location: "  Heidelberg",
    date: "12.09.2025",
    quantity: "1",
    totalPrice: "€896",
    status: (
      <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">
          Geliefert
      </div>
    ),
  },
  {
    id: 5,
    productName: "Iphone 12 Pro",
    location: "Stuttgart",
    date: "05.06.2025",
    quantity: "1",
    totalPrice: "€735",
    status: (
      <div className="bg-[#e9b434] rounded-full px-3 py-1 text-white">
        Unbekannt
      </div>
    ),
  },
  {
    id: 6,
    productName: "Apple watch 4 series",
    location: "  Heidelberg",
    date: "12.09.2025",
    quantity: "1",
    totalPrice: "€896",
    status: (
      <div className="bg-[#f93c65] rounded-full px-3 py-1 text-white">
         Storniert
      </div>
    ),
  },
  {
    id: 7,
    productName: "Apple watch 3 series",
    location: "Stuttgart",
    date: "12.09.2025",
    quantity: "1",
    totalPrice: "€896",
    status: (
      <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">
         Geliefert 
      </div>
    ),
  },
  {
    id: 8,
    productName: "Iphone 12 Pro",
    location: " Heidelberg",
    date: "05.06.2025",
    quantity: "1",
    totalPrice: "€735",
    status: (
      <div className="bg-[#e9b434] rounded-full px-3 py-1 text-white">
        Unbekannt
      </div>
    ),
  },
  {
    id: 9,
    productName: "Apple watch 4 series",
    location: "Stuttgart",
    date: "12.09.2024",
    quantity: "1",
    totalPrice: "€896",
    status: (
      <div className="bg-[#f93c65] rounded-full px-3 py-1 text-white">
         Storniert
      </div>
    ),
  },
  {
    id: 10,
    productName: "Apple watch 3 series",
    location: "  Heidelberg",
    date: "12.09.2025",
    quantity: "1",
    totalPrice: "€896",
    status: (
      <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">
       Geliefert 
      </div>
    ),
  },
  {
    id: 11,
    productName: "Iphone 15 Pro",
    location: "Stuttgart",
    date: "05.06.2025",
    quantity: "1",
    totalPrice: "€735",
    status: (
      <div className="bg-[#e9b434] rounded-full px-3 py-1 text-white">
        Unbekannt
      </div>
    ),
  },
  {
    id: 12,
    productName: "Apple watch 4 series",
    location: "Heidelbeg",
    date: "12.09.2025",
    quantity: "1",
    totalPrice: "€896",
    status: (
      <div className="bg-[#f93c65] rounded-full px-3 py-1 text-white">
         Storniert
      </div>
    ),
  },
];

const Table = () => {
  return <DataTable columns={columns} data={data} pagination />;
};

export default Table;
