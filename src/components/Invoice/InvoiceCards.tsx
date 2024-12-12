function invoicecards() {
  const stats = [
    { label: 'Clients', value: '24', icon: '👤' },
    { label: 'Invoices', value: '165', icon: '📄' },
    { label: 'Paid', value: '$2.46k', icon: '💰' },
    { label: 'Unpaid', value: '$876', icon: '🖋' },
  ];
  return (
    <>
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
              <h4 className="text-xl font-semibold text-gray-800">
                {stat.value}
              </h4>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default invoicecards;
