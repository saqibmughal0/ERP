import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Purchase from './pages/Purchase/Purchase';
import Manufactoring from './pages/Manufactoring/Manufactoring';
import Sales from './pages/Sales/Sales';
import Clients from './pages/Clients/Clients';
import Stock from './pages/Stock/Stock';
import Finance from './pages/Finance/Finance';
import Reports from './pages/Reports/Reports';
import Email from './pages/Email/Email';
import Contacts from './pages/Contacts/Contacts';
import EmployeeHR from './pages/EmployeeHR/EmployeeHR';
import Invoice from './pages/Invoice/Invoice';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import PurchaseForm from './components/PurchaseInvoice/PurchaseForm';
import InvoiceForm from './components/Invoice/InvoiceForm';
import Addsalesform from './components/AddSales/Addsalesform';
import PurchaseRefund from './pages/Purchase/PurchaseRefund';
import PurchaseRefundForm from './components/PurchaseRefund/PurchaseRefundForm';
import ManageSuppliers from './pages/Purchase/ManageSuppliers';
import ManageSupplierForm from './components/PurchaseManageSuppliers/ManageSupplierForm';
import AddnewClient from './components/AddClient/Addnewclient';
import Addclientform from './components/AddClient/Addclientform';
import ManufactoringTable from './components/Manufactoring/ManufactoringTable';
import PrivateRoute from './components/PrivateRoute/PrivateRoutes';
import ManageStock from './components/Stock/ManageStock';
import StockAdjustment from './components/Stock/StockAdjustment';
import StockTransfer from './components/Stock/StockTransfer';
import StockForm from './components/Stock/StockForm';
import Inventory from './pages/Inventory/Inventory';
import CreateProduct from './components/Inventory/ProductFormUi/CreateProduct';
import AllProducts from './components/Inventory/ProductTableUi/AllProducts';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    // Check authentication status on load from sessionStorage
    const authenticated = sessionStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authenticated);
  }, []);

  const handleRegister = () => {
    // Store authentication state in sessionStorage
    setIsAuthenticated(true);
    sessionStorage.setItem('isAuthenticated', 'true'); // Persist state in sessionStorage
  };

  const handleSignOut = () => {
    // Remove authentication state from sessionStorage
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAuthenticated');
  };

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          !isAuthenticated ? (
            <SignUp onRegister={handleRegister} />
          ) : (
            // <SignIn />
            <Navigate to="/ECommerce" />
          )
        }
      />
      <Route path="/auth/signin" element={<SignIn />} />
      <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/" element={<DefaultLayout />}>
          <Route
            path="/ECommerce"
            index
            element={
              isAuthenticated ? (
                <>
                  <PageTitle title="Dashboard | ERP DOST" />
                  <ECommerce />
                </>
              ) : (
                <Navigate to="/auth/signin" />
              )
            }
          />

          <Route
            path="/Purchase"
            element={
              <>
                <PageTitle title="Purchase | ERP DOST" />
                <Purchase />
              </>
            }
          />
          <Route path="/PurchaseForm" element={<PurchaseForm />} />
          <Route path="/PurchaseRefundForm" element={<PurchaseRefundForm />} />
          <Route path="/ManageSupplier" element={<ManageSuppliers/>} />
          <Route path="/ManageSupplierForm" element={<ManageSupplierForm />} />
          <Route
            path="/Manufactoring"
            element={
              <>
                <PageTitle title="Manufactoring | ERP DOST" />
                <Manufactoring />
              </>
            }
          />
          <Route path="/ManufactoringTable" element={<ManufactoringTable />} />
          <Route
            path="/PurchaseRefund"
            element={
              <>
                <PageTitle title="PurchaseRefund | ERP DOST" />
                <PurchaseRefund />
              </>
            }
          />
          <Route
            path="/Sales"
            element={
              <>
                <PageTitle title="Sales | ERP DOST" />
                <Sales />
              </>
            }
          />
          <Route path="/Addsalesform" element={<Addsalesform />} />
          <Route
            path="/Clients"
            element={
              <>
                <PageTitle title="Clients | ERP DOST" />
                <Clients />
              </>
            }
          />
          <Route path="/Addclientform" element={<Addclientform />} />
          <Route path="/AddnewClient" element={<AddnewClient />} />
          <Route
            path="/Inventory"
            element={
              <>
                <PageTitle title="Inventory | ERP DOST" />
                <Inventory />
              </>
            }
          />
          <Route path="/CreateProduct" element={<CreateProduct />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          
          <Route
            path="/Stock"
            element={
              <>
                <PageTitle title="Stock | ERP DOST" />
                <Stock />
              </>
            }
          />
          <Route path="/ManageStock" element={<ManageStock />} />
          <Route path="/StockAdjustment" element={<StockAdjustment />} />
          <Route path="/StockTransfer" element={<StockTransfer />} />
          <Route path="/StockForm" element={<StockForm />} />
          <Route
            path="/Finance"
            element={
              <>
                <PageTitle title="Finance | ERP DOST" />
                <Finance />
              </>
            }
          />
          <Route
            path="/Reports"
            element={
              <>
                <PageTitle title="Reports | ERP DOST" />
                <Reports />
              </>
            }
          />
          <Route
            path="/Email"
            element={
              <>
                <PageTitle title="Email | ERP DOST" />
                <Email />
              </>
            }
          />
          <Route
            path="/Contacts"
            element={
              <>
                <PageTitle title="Contacts | ERP DOST" />
                <Contacts />
              </>
            }
          />
          <Route
            path="/EmployeeHR"
            element={
              <>
                <PageTitle title="EmployeeHR | ERP DOST" />
                <EmployeeHR />
              </>
            }
          />
          <Route
            path="/Invoice"
            element={
              <>
                <PageTitle title="Invoice | ERP DOST" />
                <Invoice />
              </>
            }
          />
          <Route path="/InvoiceForm" element={<InvoiceForm />} />
          <Route
            path="/calendar"
            element={
              <>
                <PageTitle title="Calendar | ERP DOST" />
                <Calendar />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <PageTitle title="Profile | ERP DOST" />
                <Profile />
              </>
            }
          />
          <Route
            path="/tables"
            element={
              <>
                <PageTitle title="Tables | ERP DOST" />
                <Tables />
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <>
                <PageTitle title="Settings | ERP DOST" />
                <Settings />
              </>
            }
          />
          <Route
            path="/chart"
            element={
              <>
                <PageTitle title="Basic Chart | ERP DOST" />
                <Chart />
              </>
            }
          />
          <Route
            path="/ui/alerts"
            element={
              <>
                <PageTitle title="Alerts | ERP DOST" />
                <Alerts />
              </>
            }
          />
          <Route
            path="/ui/buttons"
            element={
              <>
                <PageTitle title="Buttons | ERP DOST" />
                <Buttons />
              </>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
