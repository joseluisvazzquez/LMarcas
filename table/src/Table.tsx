import Row from "./Row";
import rows from "./Data";
function Table(){
    return(
        <div className="w-60 p-3">
            <table className="table table-hover shadow p-3 mb-5 bg-body">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" className="display-4">Race</th>
                        <th scope="col" className="display-4">Body Type</th>
                        <th scope="col" className="display-4">Cuteness (0/10)</th>
                        <th scope="col" className="display-4">Country</th>
                        <th scope="col" className="display-4">Image</th>
                        <th scope="col" className="display-4">Bites?</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <Row componente={row} />
                    ))}
                </tbody>
            </table>
        </div>
    );
 } export default Table;
