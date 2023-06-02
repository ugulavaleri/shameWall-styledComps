import styled from "styled-components";

export const Container = styled.div`
    padding: 0 20px;
`;

export const Header = styled.header`
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding-top: 30px;
`;
export const Box = styled.div``;
export const Headline = styled.h1`
    font-size: 24px;
    color: #212121;
    font-weight: 500;
    margin-bottom: 10px;
`;
export const MemberTitle = styled.p`
    color: #b5b5c3;
    font-size: 13px;
`;
export const InputContainer = styled.div`
    max-width: 71%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;
export const InputBox = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;
`;
export const Input = styled.input`
    max-width: 320px;
    width: 100%;
    height: 48px;
    border: 1px solid #e2e1e5;
    border-radius: 6px;
    padding-left: 15px;
    outline: none;
    &::placeholder {
        color: #d2d2d2;
    }
`;
export const CreateButton = styled.button`
    width: 80px;
    height: 34px;
    background-color: #f64e60;
    border: none;
    color: #ffffff;
    border-radius: 6px;
    cursor: pointer;
`;
