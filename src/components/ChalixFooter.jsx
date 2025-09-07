import React from 'react';
import PropTypes from 'prop-types';
import './ChalixFooter.scss';

const ChalixFooter = ({ 
  responsiblePerson = 'Nguyễn Văn A',
  copyrightYear = new Date().getFullYear()
}) => {
  return (
    <footer className="chalix-footer">
      <div className="chalix-footer-content">
        <p className="footer-text">
          Chịu trách nhiệm nội dung bởi {responsiblePerson}
        </p>
        <p className="footer-text">
          Copyright@{copyrightYear}
        </p>
      </div>
    </footer>
  );
};

ChalixFooter.propTypes = {
  responsiblePerson: PropTypes.string,
  copyrightYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ChalixFooter;