import React from 'react';
import PropTypes from 'prop-types';
import './ChalixFooter.scss';
var ChalixFooter = function ChalixFooter(_ref) {
  var _ref$responsiblePerso = _ref.responsiblePerson,
    responsiblePerson = _ref$responsiblePerso === void 0 ? 'Nguyễn Văn A' : _ref$responsiblePerso,
    _ref$copyrightYear = _ref.copyrightYear,
    copyrightYear = _ref$copyrightYear === void 0 ? new Date().getFullYear() : _ref$copyrightYear;
  return /*#__PURE__*/React.createElement("footer", {
    className: "chalix-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chalix-footer-content"
  }, /*#__PURE__*/React.createElement("p", {
    className: "footer-text"
  }, "Ch\u1ECBu tr\xE1ch nhi\u1EC7m n\u1ED9i dung b\u1EDFi ", responsiblePerson), /*#__PURE__*/React.createElement("p", {
    className: "footer-text"
  }, "Copyright@", copyrightYear)));
};
ChalixFooter.propTypes = {
  responsiblePerson: PropTypes.string,
  copyrightYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default ChalixFooter;
//# sourceMappingURL=ChalixFooter.js.map