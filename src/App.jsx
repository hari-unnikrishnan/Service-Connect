import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Search } from "lucide-react";
import { IoMdMenu } from "react-icons/io";
import AdminSideMenu from './AdminSideMenu';
import AdminLayout from './AdminLayout';
import FinancialManagement from './Financial Dashboard';
import IncomeManagement from './IncomeManagement';
import AccountsPage from './AccountsPage';
import NotificationManagement from './NotificationManagement';
import PayoutSchedule from './PayoutSchedule';
import FranchiseeDashboard from './FranchiseeDashboard';
import PropertiesPage from './PropertiesPage';
import Profile from './Profile';
import ServiceProvider from './Service Provider';
import ServiceProviderManagement from './Service provider management';
import ServiceProvidersVerificationForm from './Service Providers Verification Form';
import ServiceVerification from './Service Verification';
import Chat from './chat';
import financialImg from "./assets/image/Placeholder.png";

function App() {
  const [currentView, setCurrentView] = useState('FinancialManagement');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    const view = getViewFromPath(path);
    setCurrentView(view);
  }, [location.pathname]);

  const getPathFromLabel = (label) => {
    switch (label) {
      case 'Dashboard':
        return '/';
      case 'Users':
        return '/users';
      case 'Service Providers':
        return '/service-providers';
      case 'Franchisee':
        return '/franchisee';
      case 'Finance':
        return '/finance';
      case 'Accounts':
        return '/accounts';
      case 'Profile':
        return '/profile';
      case 'Chat':
        return '/chat';
      case 'Settings':
        return '/settings';
      case 'Service Management':
        return '/service-management';
      case 'Ads Management':
        return '/ads-management';
      case 'Notifications':
        return '/notifications';
      default:
        return '/';
    }
  };

  const getViewFromPath = (path) => {
    switch (path) {
      case '/':
        return 'FinancialManagement';
      case '/users':
      case '/accounts':
        return 'AccountPage';
      case '/service-providers':
        return 'ServiceProviderManagement';
      case '/franchisee':
        return 'PayoutSchedule';
      case '/finance':
        return 'FranchiseeDashboard';
      case '/profile':
        return 'Profile';
      case '/chat':
        return 'Chat';
      case '/settings':
        return 'Settings';
      case '/service-management':
        return 'ServiceManagement';
      case '/ads-management':
        return 'AdsManagement';
      case '/notifications':
        return 'NotificationManagement';
      case '/service-providers-verification-form':
        return 'ServiceProvidersVerificationForm';
      case '/service-verification':
        return 'ServiceVerification';
      default:
        return 'FinancialManagement';
    }
  };

  const handleMenuClick = (label) => {
    const path = getPathFromLabel(label);
    navigate(path);
  };

  const getActiveItem = () => {
    const path = location.pathname;
    switch (path) {
      case '/':
        return 'Dashboard';
      case '/users':
        return 'Users';
      case '/service-providers':
        return 'Service Providers';
      case '/franchisee':
        return 'Franchisee';
      case '/finance':
        return 'Finance';
      case '/accounts':
        return 'Accounts';
      case '/profile':
        return 'Profile';
      case '/chat':
        return 'Chat';
      case '/settings':
        return 'Settings';
      case '/service-management':
        return 'Service Management';
      case '/ads-management':
        return 'Ads Management';
      case '/notifications':
        return 'Notifications';
      case '/service-providers-verification-form':
        return 'service-providers-verification-form';
      case '/service-verification':
        return 'ServiceVerification';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="fm-container">
      {/* Sidebar */}
      <AdminSideMenu
        isOpen={isSidebarOpen}
        onOpen={() => setIsSidebarOpen(true)}
        onClose={() => setIsSidebarOpen(false)}
        onSelectItem={handleMenuClick}
        activeItem={getActiveItem()}
      />

      {/* Main */}
      <main className="fm-main">
        {/* Header */}
        <header className="fm-header">
          <h2>{currentView === 'FinancialManagement' ? 'Financial Management' : currentView.replace(/([A-Z])/g, ' $1').trim()}</h2>

          <div className="fm-header-right">
            <div className="fm-search">
              <Search size={16}/>
              <input type="text" placeholder="Search here..." />
            </div>

            <div className="fm-profile">
              <span>Nebula A.</span>
             <img src={financialImg} alt="spark" className="fm-spark" />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="fm-content">
          <Routes>
            <Route path="/" element={<FinancialManagement />} />
            <Route path="/users" element={<AccountsPage />} />
            <Route path="/accounts" element={<IncomeManagement/>} />
            <Route path="/service-providers" element={<ServiceProviderManagement />} />
            <Route path="/franchisee" element={<PayoutSchedule />} />
            <Route path="/finance" element={<FranchiseeDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/settings" element={<ServiceProvider/>} />
            <Route path="/service-management" element={<div>Service Management Page Placeholder</div>} />
            <Route path="/ads-management" element={<div>Ads Management Page Placeholder</div>} />
            <Route path="/notifications" element={<NotificationManagement />} />
            <Route path="/service-providers-verification-form" element={<ServiceProvidersVerificationForm />} />
            <Route path="/service-verification" element={<ServiceVerification />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
