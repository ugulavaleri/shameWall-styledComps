import styled from "styled-components";

export const Cont = styled.div`
    height: 600px;
    overflow-y: scroll;
`;

export const Table = styled.table`
    max-width: 1200px;
    width: 100%;

    margin: 30px auto 0 auto;
    text-align: left;
    border-collapse: collapse;
`;
export const TableHeadPart = styled.thead`
    width: 1000px;
    height: 50px;
    background-color: #f3f6f9;
`;
export const TableRow = styled.tr``;
export const TableHeadlineTitles = styled.th`
    color: #b5b5c3;
    font-size: 14px;
    font-weight: 500;

    &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        padding-left: 15px;
        color: #464e5f;
    }
    &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
`;
