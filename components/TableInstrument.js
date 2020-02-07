const TableInstrument = props => {
  const { data } = props;
  console.log("inst", data);

  return (
    <div>
      {data ? (
        <table className="table">
          <thead className="thead-dark"></thead>
          <tbody>
              {Object.keys(data).map((key, index) => (
                <tr className="thead-dark" key={data.identifier}>
                  <td>{index + 1}</td>
                  <th>{key}</th>

                  {/* If the value is empty or equal to null display dash " - " instead of empty field */}
                  {data[key] === null || data[key] === "" ? (
                    <td> - </td>
                  ) : // display nested property
                  key === "company" ? (
                    <td>{data.company.description}</td>
                  ) : (
                    <td>{data[key]}</td>
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default TableInstrument;
