import Link from "next/link";

const TablePosition = props => {
  const { positions } = props.data;

  return (
    <div>
      {positions ? (
        <table className="table">
          <thead className="thead-dark">
            <tr>
            {/* Display keys in the heading */}
              {positions.map((position, index) => (
                <th key={index}>{Object.keys(position)[index - 1]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {positions.map((positions, index) => (
              <tr key={positions.instrument.id} >
                <th scope="row">{index + 1}</th>
                
            {/* Link to Instruments with the unique ID */}
                <td>
                  <Link href={`/instrument?id=${positions.instrument.id}`}>
                    <a>Instrument id {positions.instrument.id} </a>
                  </Link>
                </td>
                <td>{positions.acquisition_price}</td>
                <td>{positions.allocation}</td>
                <td>
                  {positions.change_percent === null
                    ? "-"
                    : positions.change_percent}
                </td>
                <td>{positions.kind}</td>
                <td>{positions.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default TablePosition;
