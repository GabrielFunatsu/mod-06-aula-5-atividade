import { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { ValueList } from "../ValueList";

const ListResult = ({ data }) => {
  const result = useMemo(() => {
    console.log("Calculating...");
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    return sum;
  }, [data]);

  useEffect(() => {
    console.log("O valor foi adicionado");
  }, [result]);

  return (
    <>
      <ValueList data={data} />
      <h1>{result}</h1>
    </>
  );
};

ListResult.propTypes = {
  data: PropTypes.array,
};

export { ListResult };
