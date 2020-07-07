import React from "react";
import "./TopLoading.css"


const TopLoading = () => {


    return (
        <div className="loadingWrapper">
            <div className="loadingCircle"></div>
            <div className="loadingCircle"></div>
            <div className="loadingCircle"></div>
            <div className="loadingShadow"></div>
            <div className="loadingShadow"></div>
            <div className="loadingShadow"></div>
            <span>درحال بارگزاری</span>
        </div>
    )
}

export default TopLoading;