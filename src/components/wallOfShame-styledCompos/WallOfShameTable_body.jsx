import {
    TableBodyPart,
    TableDataCell,
    IncreaseButton,
} from "./styles/ShameTableBody.styled";

import { TableRow } from "./styles/ShameTableHead.styled";

const TableBody = ({ users, setUsersArray }) => {
    const handleIncreaseClick = (id) => {
        setUsersArray((prev) => {
            return prev.map((user) => {
                if (user.id === id) {
                    return { ...user, count: user.count + 1 };
                }
                return user;
            });
        });
        console.log(users);
    };

    return (
        <TableBodyPart>
            {users.map((e) => (
                <TableRow key={e.id}>
                    <TableDataCell>{e.name}</TableDataCell>
                    <TableDataCell>{e.excuse}</TableDataCell>
                    <TableDataCell>{e.count}</TableDataCell>
                    <TableDataCell>
                        <IncreaseButton
                            onClick={() => handleIncreaseClick(e.id)}
                        >
                            Increase
                        </IncreaseButton>
                    </TableDataCell>
                </TableRow>
            ))}
        </TableBodyPart>
    );
};
export default TableBody;
