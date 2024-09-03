import styled from "styled-components";
import userImg from "../image/userImg.jpg";
import { Heart, Bell, Settings, Search, SlidersHorizontal } from "lucide-react";

export default function MainHeader() {
    const HeaderContainer = styled.div`
        display: flex;
        align-items: center;
        padding: 40px 64px;
        width: 100%;
        height: 124px;
        box-sizing: border-box;
    `;

    const Logo = styled.h2`
        font-size: 32px;
        line-height: 48px;
        font-weight: 700;
        color: #3563E9;
    `;

    const SearchBox = styled.div`
        display: flex;
        align-items: center;
        width: 492px;
        height: 44px;
        border: 1px solid rgba(195, 212, 249, 0.4);
        border-radius: 70px;
        box-sizing: border-box;
    `;

    const InputBox = styled.input`
        border: none;
        outline: none;
        font-size: 14px;
        line-height: 21px;
    `;

    const ButtonCollection = styled.div`
        display: flex;
        align-items: center;
        gap: 20px;
        margin-left: auto;

    `;

    return (
        <HeaderContainer>
            <Logo>KernelRent</Logo>
            <SearchBox style={{marginLeft: "36px"}}>
                <Search color="gray" size={24} style={{padding: "10px 20px"}}/>
                <InputBox placeholder="Search something here"/>
                <SlidersHorizontal color="gray" size={24} style={{marginLeft: "auto", padding: "10px 20px", cursor: "pointer"}}/>
            </SearchBox>
            <ButtonCollection>
                <Heart color="gray" size={24} style={{width: "44px", height: "44px", boxSizing: "border-box",border: "1px solid rgba(195, 212, 249, 0.4)" ,borderRadius: "90px", padding: "10px", cursor: "pointer", fill: "gray"}}/>
                <Bell color="gray" size={24} style={{width: "44px", height: "44px", boxSizing: "border-box",border: "1px solid rgba(195, 212, 249, 0.4)" ,borderRadius: "90px", padding: "10px", cursor: "pointer", fill: "gray"}}/>
                <Settings color="gray" style={{width: "44px", height: "44px", boxSizing: "border-box",border: "1px solid rgba(195, 212, 249, 0.4)" ,borderRadius: "90px", padding: "10px", cursor: "pointer"}}/>
                <img alt="user_img" src={userImg} width={44} height={44} style={{border: "1px solid rgba(195, 212, 249, 0.4)", boxSizing: "border-box", borderRadius: "90px", cursor: "pointer", backgroundSize: "cover"}}/>
            </ButtonCollection>
        </HeaderContainer>
    )
}