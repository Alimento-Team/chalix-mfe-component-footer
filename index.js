// CommonJS entry point for Chalix Footer Component
// This is a temporary stub for webpack compatibility

// For now, export simple placeholders that webpack can resolve
module.exports = {
  default: function ChalixFooterDefault() { 
    return require('react').createElement('div', {}, 'Chalix Footer Loading...'); 
  },
  ChalixFooter: function ChalixFooter(props) {
    const React = require('react');
    const year = props?.copyrightYear || new Date().getFullYear();
    const person = props?.responsiblePerson || 'Nguyễn Văn A';
    
    return React.createElement('footer', { 
      className: 'chalix-footer',
      style: { 
        backgroundColor: '#f8f9fa', 
        padding: '20px', 
        textAlign: 'center',
        borderTop: '1px solid #dee2e6'
      }
    }, [
      React.createElement('div', { key: 'content', className: 'chalix-footer-content' }, [
        React.createElement('p', { key: 'responsible', className: 'footer-text' }, `Chịu trách nhiệm nội dung bởi ${person}`),
        React.createElement('p', { key: 'copyright', className: 'footer-text' }, `Copyright@${year}`)
      ])
    ]);
  },
  messages: {},
  EVENT_NAMES: {},
  StudioFooter: function StudioFooter() { 
    return require('react').createElement('div', {}, 'Studio Footer'); 
  },
  FooterSlot: function FooterSlot() { 
    return require('react').createElement('div', {}, 'Footer Slot'); 
  },
  StudioFooterSlot: function StudioFooterSlot() { 
    return require('react').createElement('div', {}, 'Studio Footer Slot'); 
  }
};
