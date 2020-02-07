const TableInstrument = props => {
  const { data } = props;

  return (
    <div >
      {data ? (
        <table className="table">
          <thead className="thead-dark"></thead>
          <tbody>
            {Object.keys(data).map((key, index) => (
              <tr className="thead-dark" key={key}>
                <td>{index + 1}</td>
                <th>{key}</th>
                <td className="col-4">
                  {(key === "company" && data.company)
                    ? data.company.description
                    : data[key] || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default TableInstrument;
