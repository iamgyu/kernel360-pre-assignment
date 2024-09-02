import Component from "../component/Component";
import styled from "styled-components"
import { Search } from "lucide-react";

export default function MainPage() {
    const HeaderContainer = styled.div`
        display: flex;
        align-items: center;
        padding: 0 60px;
        width: 100%;
        height: 100px;
    `;

    const Logo = styled.h2`
        font-size: 24px;
        color: rgb(64, 98, 255);
    `;

    const SearchBox = styled.div`
        display: flex;
        align-items: center;
        padding: 5px;
        border: 1px solid gray;
        border-radius: 24px;
    `;

    const InputBox = styled.input`
        placeholder: ${(props) => props}
    `;

    const Body = styled.div`
        width: 100%;
        height: 100vh;
        background-color: gray;
    `;

    return (
        <>
            <HeaderContainer>
                <Logo>KernelRent</Logo>
                <SearchBox>
                    <Search color="gray" size={24} style={{padding: "0 5px"}}/>
                    <input placeholder="Search Something here" />
                </SearchBox>
            </HeaderContainer>
            <Body>

            </Body>
        </>
    )
}