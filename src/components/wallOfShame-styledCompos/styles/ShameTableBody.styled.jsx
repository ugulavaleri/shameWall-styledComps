import styled from "styled-components";

export const TableBodyPart = styled.tbody`
    // height: 600px;

    // overflow-y: scroll;
`;
export const TableDataCell = styled.td`
    font-size: 15px;
    height: 70px;
    &:first-child {
        padding-left: 15px;
        color: #464e5f;
        width: 25%;
        font-weight: 600;
        padding-right: 10px;
    }
    &:nth-child(2) {
        color: #b5b5c3;
        padding-right: 15px;
    }
    &:nth-child(3) {
        color: #464e5f;
        font-weight: 600;
    }
    &:last-child {
        text-align: right;
        width: 25%;
    }
`;
export const IncreaseButton = styled.button`
    max-width: 95px;
    width: 100%;
    height: 35px;
    background-color: #c9f7f5;
    border: none;
    color: #1bc5bd;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
`;
