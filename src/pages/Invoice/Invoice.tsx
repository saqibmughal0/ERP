// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invoicecards from "../../components/Invoice/InvoiceCards"
import InvoiceTable from "../../components/Invoice/InvoiceTable"
// import InvoiceForm from "../../components/Invoice/InvoiceForm"

function Invoice() {
  
  return (
    <>
      <Invoicecards />
      <div className="py-8">
      <InvoiceTable />
    </div>
    </>
  )
}

export default Invoice


