import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { getConfig } from '@edx/frontend-platform';

import './ChalixFooter.scss';

const ChalixFooter = ({ responsiblePerson, copyrightText }) => {
  const { authenticatedUser, config } = useContext(AppContext);
  const { formatMessage } = useIntl();

  // Get current year
  const currentYear = new Date().getFullYear();
  
  // Get platform/site name for copyright
  const siteName = config?.PLATFORM_NAME || config?.SITE_NAME || 'Chalix';
  
  // Get responsible person or admin name, fallback to authenticated user or default
  const displayResponsiblePerson = responsiblePerson || 
    config?.FOOTER_ADMIN_NAME ||
    authenticatedUser?.name || 
    authenticatedUser?.username || 
    'Administrator';

  // Copyright text
  const displayCopyrightText = copyrightText || 
    `Copyright © ${currentYear} ${siteName}`;

  return (
    <div className="chalix-footer">
      <div className="chalix-footer-container">
        <div className="footer-content">
          <p>Chịu trách nhiệm nội dung bởi {displayResponsiblePerson}</p>
          <p>{displayCopyrightText}</p>
        </div>
      </div>
    </div>
  );
};

ChalixFooter.propTypes = {
  responsiblePerson: PropTypes.string,
  copyrightText: PropTypes.string,
};

ChalixFooter.defaultProps = {
  responsiblePerson: null,
  copyrightText: null,
};

export default ChalixFooter;
