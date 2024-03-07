import PropTypes from "prop-types";

const Counter = ({ count, onIncrement }) => {
  console.log(`Rendering Counter: ${count}`);
  return (
    <>
      <p>{count}</p>
      <button onClick={onIncrement}>Incrementar</button>
    </>
  );
};

Counter.propTypes = {
  count: PropTypes.number,
  onIncrement: PropTypes.func,
};

export { Counter };
