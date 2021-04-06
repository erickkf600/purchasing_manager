import React from "react";

export const generateRadomString = (length)  =>{
    var result           = '';
    var characters       = '0123456789FX';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const Currency = (data, type) =>{
    // let currencyFormat = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data)
    let currencyFormat = type+ data.toFixed(2)
    return currencyFormat
}