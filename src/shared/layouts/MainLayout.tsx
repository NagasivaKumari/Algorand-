import React from 'react';
import Navbar from '@shared/components/Navbar';
import Footer from '@shared/components/Footer';
import { useTheme } from '@shared/contexts/ThemeContext';
import styles from './MainLayout.module.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.layout} ${styles[theme]}`}>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
