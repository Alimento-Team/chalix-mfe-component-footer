// CommonJS entry point for Chalix Footer Component
const React = require('react');

// Self-contained ChalixFooter component
function ChalixFooter(props) {
  const year = props?.copyrightYear || new Date().getFullYear();
  const person = props?.responsiblePerson || 'Chalix Person';
  
  return React.createElement('footer', { 
    className: 'chalix-footer',
    style: { 
      backgroundColor: '#f8f9fa', 
      padding: '20px', 
      textAlign: 'center',
      borderTop: '1px solid #dee2e6',
      marginTop: 'auto'
    }
  }, 
    React.createElement('div', { className: 'chalix-footer-content' }, [
      React.createElement('p', { 
        key: 'responsible', 
        className: 'footer-text',
        style: { margin: '5px 0', fontSize: '14px', color: '#6c757d' }
      }, `Chịu trách nhiệm nội dung bởi ${person}`),
      React.createElement('p', { 
        key: 'copyright', 
        className: 'footer-text',
        style: { margin: '5px 0', fontSize: '14px', color: '#6c757d' }
      }, `Copyright © ${year}`)
    ])
  );
}

// Add PropTypes if available
if (typeof require !== 'undefined') {
  try {
    const PropTypes = require('prop-types');
    ChalixFooter.propTypes = {
      responsiblePerson: PropTypes.string,
      copyrightYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };
  } catch (e) {
    // PropTypes not available, skip
  }
}

// Default Footer component (fallback to ChalixFooter)
function Footer(props) {
  return ChalixFooter(props);
}

// Export all components
module.exports = Footer;
module.exports.default = Footer;
module.exports.ChalixFooter = ChalixFooter;
module.exports.messages = {};
module.exports.EVENT_NAMES = {};
module.exports.StudioFooter = function StudioFooter() { 
  return React.createElement('div', { className: 'studio-footer' }, 'Studio Footer'); 
};
module.exports.FooterSlot = function FooterSlot(props) { 
  return React.createElement('div', { className: 'footer-slot' }, props.children || 'Footer Slot'); 
};
module.exports.StudioFooterSlot = function StudioFooterSlot(props) { 
  return React.createElement('div', { className: 'studio-footer-slot' }, props.children || 'Studio Footer Slot'); 
};
