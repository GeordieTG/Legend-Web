import Sidebar from "../components/Sidebar";

const Statistics = () => {
    return (
        <div className="flex bg-zinc-100">
            <Sidebar />

            <div className="p-16">
                <h1>Statistics</h1>

                <table className="table-fixed">
                    <thead>
                    <tr>
                        <th>Player</th>
                        <th>P</th>
                        <th>T</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Geordie Gibson</td>
                        <td>84</td>
                        <td>3</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Statistics