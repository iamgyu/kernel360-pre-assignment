import styled from "styled-components";
import carImg1 from "../image/carImg1.png";
import carImg2 from "../image/carImg2.png";
import { ArrowDownUp } from "lucide-react";

export default function MainBody() {
    const Body = styled.div`
        height: 100vh;
        padding: 32px 64px;
        background-color: #F6F7F9;
    `;

    const MainBannerContainer = styled.div`
        display: flex;
        gap: 32px;
    `;

    const MainBanner = styled.div`
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 360px;
        padding: 24px;
        overflow: hidden;
        box-sizing: border-box;
        border-radius: 10px;
        background-color: ${(props) => props.color ? props.color : "black"};
    `;
    
    const BannerDiv = styled.div`
        display: flex;
        flex-direction: column;
        width: 284px;
        gap: 16px;
    `;

    const BannerTitle = styled.div`
        font-size: 32px;
        line-height: 48px;
        font-weight: 600;
        color: white;
    `;

    const BannerDetail = styled.div`
        font-size: 16px;
        line-height: 24px;
        color: white;
    `;

    const BannerButton = styled.button`
        border: none;
        border-radius: 4px;
        width: 120px;
        padding: 10px 20px;
        font-size: 16px;
        line-height: 24px;
        color: white;
        background-color: ${(props) => props.color ? props.color: "black"};    
        cursor: pointer;
    `;

    const BannerImg = styled.img`
        max-width: 50%;
        margin: auto;
    `;

    const RentInfoContainer = styled.div`
        display: flex;
        margin-top: 32px;
        gap: 44px;
    `;

    const RentInfo = styled.div`
        flex: 1;
        height: 132px;
        padding: 24px 48px;
        border-radius: 10px;
        background-color: white;
        box-sizing: border-box;
    `;
    
    const RentInfoTitle = styled.div`
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
    `;

    const TwinCircle = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 16px;
        width: 16px;
        border-radius: 70px;
        background-color: ${(props) => props.color ? props.color : "black"};
    `;

    const TwinCircleInside = styled.div`
        height: 8px;
        width: 8px;
        border-radius: 70px;
        background-color: ${(props) => props.color ? props.color : "black"};
    `;

    const SwitchButton = styled.button`
        margin: auto;
        width: 60px;
        height: 60px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        background-color: #3563E9;
    `;

    const RentInfoDetail = styled.div`
        display: flex;
        gap: 24px;
        margin-top: 16px;
        height: 48px;
    `;

    const OneInfo = styled.div`
    display: inline-block;
        width: 126px;
        height: 48px;
    `;


    return (
        <Body>
            <MainBannerContainer>
                <MainBanner color="#54A6FF">
                    <BannerDiv>
                        <BannerTitle>The Best Platform for Car Rental</BannerTitle>
                        <BannerDetail>Ease of doing a car rental safely and reliably. Of Course at a low price.</BannerDetail>
                        <BannerButton color="#3563E9">Rental Car</BannerButton>
                    </BannerDiv>
                    <BannerImg src={carImg1} />
                </MainBanner>
                <MainBanner color="#3563E9">
                    <BannerDiv>
                        <BannerTitle>Easy way to rent a car at a low price</BannerTitle>
                        <BannerDetail>Providing cheap car rental services and safe and comfortable facilities.</BannerDetail>
                        <BannerButton color="#54A6FF">Rental Car</BannerButton>
                    </BannerDiv>
                    <BannerImg src={carImg2} />
                </MainBanner>
            </MainBannerContainer>

            <RentInfoContainer>
                <RentInfo>
                    <RentInfoTitle>
                        <TwinCircle color="rgba(53, 99, 233, 0.3)">
                            <TwinCircleInside color="#3563E9"/>
                        </TwinCircle>
                        Pick - Up
                    </RentInfoTitle>
                    <RentInfoDetail>
                        <OneInfo>
                            Locations
                        </OneInfo>
                        <div style={{width: "1px", height: "100%", backgroundColor: "gray"}}></div>
                        <OneInfo>
                            Locations
                        </OneInfo>
                        <div style={{width: "1px", height: "100%", backgroundColor: "gray"}}></div>
                        <OneInfo>
                            Locations
                        </OneInfo>
                    </RentInfoDetail>
                </RentInfo>
                <SwitchButton>
                    <ArrowDownUp size={24} color="white"/>
                </SwitchButton>
                <RentInfo>
                    <RentInfoTitle>
                        <TwinCircle color="rgba(92, 175, 252, 0.3)">
                            <TwinCircleInside color="#54A6FF"/>
                        </TwinCircle>
                        Drop - Off
                    </RentInfoTitle>
                    <RentInfoDetail>

                    </RentInfoDetail>
                </RentInfo>
            </RentInfoContainer>
        </Body>
    )
}