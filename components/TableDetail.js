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
            <tr className="thead-dark" key={key}>
              <td>{key}</td>
              <td>
                {key === "positions" && data[key] && data[key].length > 0 ? (
                  <a href="#positions"> List of Positions </a>
                ) : (
                  data[key] || "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDetail;
