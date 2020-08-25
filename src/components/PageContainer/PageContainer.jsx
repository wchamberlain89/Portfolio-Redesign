import React from 'react';
import './PageContainer.css';

const PageContainer = ({ children }) => {
  return (
    <div class="page-container">
      { children }
    </div>
  )
}

export default PageContainer;
