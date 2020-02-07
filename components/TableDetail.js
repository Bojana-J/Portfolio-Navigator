const TableDetail = props => {
  const { data } = props;
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">General information</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map(key => (
            <tr className="thead-dark" key={data.identifier}>
              <td>{key}</td>

              {/* If the value is empty or equal to null display dash " - " instead of empty field */}
              {data[key] === null || data[key] === "" ? (
                <td> - </td>
              ) : // link/anchor to positions table
              key === "positions" ? (
                <td>
                  <a href="#positions"> List of Positions </a>
                </td>
              ) : (
                <td>{data[key]}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDetail;
