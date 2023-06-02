import {
    Table,
    TableHeadPart,
    TableRow,
    TableHeadlineTitles,
    Cont,
} from "./styles/ShameTableHead.styled";
import TableBody from "./WallOfShameTable_body";

const TableWrapper = ({ users, setUsersArray }) => {
    return (
        <>
            <Cont>
                <Table>
                    <TableHeadPart>
                        <TableRow>
                            <TableHeadlineTitles>Name</TableHeadlineTitles>
                            <TableHeadlineTitles>Excuse</TableHeadlineTitles>
                            <TableHeadlineTitles>Count</TableHeadlineTitles>
                            <TableHeadlineTitles></TableHeadlineTitles>
                        </TableRow>
                    </TableHeadPart>

                    <TableBody users={users} setUsersArray={setUsersArray} />
                </Table>
            </Cont>
        </>
    );
};

export default TableWrapper;
