import { Fragment,useEffect } from "react";
import { useDispatch } from "react-redux";
import { positionActions } from "../storage/redux";
import SiteTextContainer from "../UI/SiteTextContainer";
import style from "./Prices.module.css";
import SinglePriceItem from "../components/PricesComponents/SinglePriceItem";

export default function Prices()
{
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(positionActions.pagePositionChange(2));
    },[dispatch]);

    return<Fragment>
            <SiteTextContainer>
                <div className={style.container}>
                    <h3 className={style.header}>SPRAWDŹ NASZE CENY</h3>
                    <SinglePriceItem name="Karp" price="50"/>
                    <SinglePriceItem name="Karaś" price="38"/>
                    <SinglePriceItem name="Łosoś" price="40"/>
                    <SinglePriceItem name="Dorsz" price="30"/>
                </div>
            </SiteTextContainer>
        </Fragment>
} 