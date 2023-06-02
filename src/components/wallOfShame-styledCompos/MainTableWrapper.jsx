import { useState } from "react";
import {
    Header,
    Container,
    Box,
    Headline,
    MemberTitle,
    InputContainer,
    InputBox,
    Input,
    CreateButton,
} from "./styles/MainTableWrapper.styled";
import TableWrapper from "./WallOfShameTable_head";

const WallOfShame = ({ users }) => {
    const [name, setName] = useState("");
    const [excuse, setExcuse] = useState("");

    const [usersArray, setUsersArray] = useState(users);

    const HandleCreateClick = () => {
        if (name.trim() !== "" && excuse.trim() !== "") {
            setUsersArray((prev) => [
                ...prev,
                {
                    id: usersArray.length + 1,
                    name: name,
                    excuse: excuse,
                    count: 1,
                },
            ]);
            console.log(usersArray);
        } else {
            alert("You must fill all gaps!");
        }
        setName("");
        setExcuse("");
    };

    return (
        <>
            <Container>
                <Header>
                    <Box>
                        <Headline>Wall of shame</Headline>
                        <MemberTitle>{usersArray.length} members</MemberTitle>
                    </Box>
                    <InputContainer>
                        <InputBox>
                            <Input
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                placeholder="Excuse"
                                value={excuse}
                                onChange={(e) => setExcuse(e.target.value)}
                            />
                        </InputBox>
                        <Box>
                            <CreateButton onClick={HandleCreateClick}>
                                Create
                            </CreateButton>
                        </Box>
                    </InputContainer>
                </Header>
                <TableWrapper
                    users={usersArray}
                    setUsersArray={setUsersArray}
                />
            </Container>
        </>
    );
};

export default WallOfShame;
