import PropTypes from "prop-types";

const ItemValue = ({ value }) => {
  return <li>{value}</li>;
};

ItemValue.propTypes = {
  key: PropTypes.number,
  value: PropTypes.number,
};

export { ItemValue };
