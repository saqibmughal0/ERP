import { useEffect, useState } from "react";

function InvoiceCards({ invoices }: { invoices: any[] }) {
  const [stats, setStats] = useState([
    { label: "Clients", value: 0, icon: "👤" },
    { label: "Invoices", value: 0, icon: "📄" },
    { label: "Paid", value: "$0", icon: "💰" },
    { label: "Unpaid", value: "$0", icon: "🖋" },
  ]); 

  useEffect(() => {
    // Update stats dynamically based on invoices
    const totalInvoices = invoices.length;
    const paidAmount = invoices.reduce(
      (acc, invoice) => (invoice.status === "Paid" ? acc + invoice.amount : acc),
      0
    );
    const unpaidAmount = invoices.reduce(
      (acc, invoice) => (invoice.status === "Unpaid" ? acc + invoice.amount : acc),
      0
    );

    setStats([
      { label: "Clients", value: invoices.length > 0 ? invoices.length : 0, icon: "👤" },
      { label: "Invoices", value: totalInvoices, icon: "📄" },
      { label: "Paid", value: `$${paidAmount}`, icon: "💰" },
      { label: "Unpaid", value: `$${unpaidAmount}`, icon: "🖋" },
    ]);
  }, [invoices]);

  return (
    <div className="flex items-center justify-between gap-4 bg-white shadow-md p-4 rounded-lg">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center gap-3 border-r last:border-0 pr-4 last:pr-0"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
            <span className="text-lg text-gray-700">{stat.icon}</span>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800">{stat.value}</h4>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InvoiceCards;
