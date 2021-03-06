import React from "react";
import styled from "styled-components";

const HeaderWrapper=styled.div<{height:number}>`
    width:100vw;
    height:${(props)=>props.height}px;
    display: flex;
    flex-direction: column;

    & > div{        
        flex:1;
        line-height:${(props)=>props.height/2}px;
        height:100%;
    }
    &>div:first-child{
        background-color: #5383e8;        
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 40px;
    }
    &>div:last-child{
        background-color: rgba(0,0,0,0.5);
        color:white;
        font-weight:bold;
        padding:0 80px;
    }
`
const HeaderItemWrapper=styled.div`
    display: flex;
`
const HeaderItem=styled.div<{active?:boolean}>`
    color:rgba(255,255,255, ${(props)=>props.active?1:.7});
    font-weight:bold;
    margin: 0 16px;    
    box-shadow: 0px -${(props)=>props.active?3:0}px 0px 0px #fff inset;
    /* border-bottom: ${(props)=>props.active?3:0}px solid white; */
    cursor:pointer;
`
const HeaderInput=styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    height :40px;
    border-radius: 5px;
    &>div:first-child{
        height: 100%;
        color:#4171d6;
        position:relative;
        background-color: #ecf2ff;
        line-height: 40px;
        padding: 0 12px;
        padding-right: 30px;
        font-size: 13px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

        cursor: pointer;

        &::after{
            content:"";
            position: absolute;
            right:16px;
            top:50%;
            margin-top:-2px;
            border-top: 4px solid #5383e8;
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
        }
    }
    &>input{
        border:none;
        outline: none;
        padding:0 10px;
    }   
    & img{
        height: 14px;
        margin-right: 10px;
    }
`

interface HeaderProps{
    headerHeight:number;
}

const Header:React.FC<HeaderProps>= (props) =>{
    return (
        <HeaderWrapper height={props.headerHeight}>
            <div>
                <HeaderItemWrapper>
                    <HeaderItem>#????????????</HeaderItem>
                    <HeaderItem active={true}>????????? ??????</HeaderItem>
                    <HeaderItem>?????????</HeaderItem>
                    <HeaderItem>?????????</HeaderItem>
                    <HeaderItem>??????</HeaderItem>
                    <HeaderItem>??????</HeaderItem>
                    <HeaderItem>????????????</HeaderItem>
                </HeaderItemWrapper>
                <HeaderInput>
                    <div>KR</div>
                    <input type="text" placeholder="????????????, ???????????? ..."/>
                    <div>
                        <img src="https://opgg-static.akamaized.net/images/gnb/svg/00-icon-gg.svg
" alt="" />
                    </div>
                </HeaderInput>
            </div>
            <div>?????? ???????????? ????????? ?????? ???????????? ??? ??? ?????????.</div>
        </HeaderWrapper>
    );
}
export default Header;