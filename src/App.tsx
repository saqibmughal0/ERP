import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Purchase from './pages/Purchase/Purchase';
import Manufactoring from './pages/Manufactoring/Manufactoring';
import Sales from './pages/Sales/Sales';
import Clients from './pages/Clients/Clients';
import StockInventory from './pages/StockInventory/StockInventory';
import Finance from './pages/Finance/Finance';
import Reports from './pages/Reports/Reports';
import Email from './pages/Email/Email';
import Contacts from './pages/Contacts/Contacts';
import EmployeeHR from './pages/EmployeeHR/EmployeeHR';
import Invoice from './pages/Invoice/Invoice';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import PurchaseForm from './components/PurchaseInvoice/PurchaseForm';
import Addclientform from './components/AddClient/Addclientform';
import InvoiceForm from './components/Invoice/InvoiceForm';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        />
        <Route
          index
          path="/Purchase"
          element={
            <>
              <PageTitle title="Sales | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Purchase />
            </>
          }
        />
        <Route path="/PurchaseForm" element={<PurchaseForm />} />
        <Route
          path="/Manufactoring"
          element={
            <>
              <PageTitle title="Sales | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Manufactoring />
            </>
          }
        />
        <Route
          path="/Sales"
          element={
            <>
              <PageTitle title="Sales | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Sales />
            </>
          }
        />
        <Route
          path="/Clients"
          element={
            <>
              <PageTitle title="Sales | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Clients />
            </>
          }
        />
        <Route path="/Addclientform" element={<Addclientform />} />
        <Route
          path="/StockInventory"
          element={
            <>
              <PageTitle title="Sales | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <StockInventory />
            </>
          }
        />
        <Route
          path="/Finance"
          element={
            <>
              <PageTitle title="Sales | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Finance />
            </>
          }
        />
        <Route
          path="/Reports"
          element={
            <>
              <PageTitle title="Sales | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Reports />
            </>
          }
        />
        <Route
          path="/Email"
          element={
            <>
              <PageTitle title="Sales | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Email />
            </>
          }
        />
        <Route
          path="/Contacts"
          element={
            <>
              <PageTitle title="Sales | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Contacts />
            </>
          }
        />
        <Route
          path="/EmployeeHR"
          element={
            <>
              <PageTitle title="Sales | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <EmployeeHR />
            </>
          }
        />
        <Route
          path="/Invoice"
          element={
            <>
              <PageTitle title="Sales | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Invoice />
            </>
          }
        />
        <Route path="/InvoiceForm" element={<InvoiceForm />} />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
