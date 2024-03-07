import React from "react";
import PropTypes from "prop-types";
import { ItemValue } from "../ItemValue";

const ValueList = ({ data }) => {
  const MemoizedItenValue = React.memo(ItemValue);

  return (
    <ul>
      {data.map((value, index) => (
        <MemoizedItenValue key={index} value={value} />
      ))}
    </ul>
  );
};

ValueList.propTypes = {
  data: PropTypes.array,
};

export { ValueList };
