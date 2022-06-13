import { useState } from "react";
import { addReceipt, deleteReceipt, getAllReceipts, Receipt } from "../state/slices/receiptSlice";
import { AddDispatch } from "../state/Store";
import { updateProductHandler } from "./productActions";

const ENDPOINT = "http://localhost:8080/receipt/"
const HEADERS = { "Content-type": "application/json" }

const bringReceiptsHandler = async (dispatch: AddDispatch) => {

    let answer = await fetch(
        `${ENDPOINT}all`,
        { method: "GET" }
    );
    answer.ok ? dispatch(getAllReceipts(await answer.json()))
        : console.log("Error bringing the receipts");
}

const saveReceiptHandler = async (dispatch: AddDispatch, receipt: Receipt) => {
    
    let answer = await fetch(
        `${ENDPOINT}save`,
        {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify(receipt)
        },
    );
    if (answer.ok) {
        dispatch(addReceipt(await answer.json()))
        receipt.order.map( product => updateProductHandler(dispatch, product))
    }
    console.log("Error saving the receipt");
}

const deleteReceiptHandler = async (dispatch: AddDispatch, receipt: Receipt) => {

    let answer = await fetch(
        `${ENDPOINT}delete/${receipt.id}`,
        {
            method: "DELETE",
            headers: HEADERS,
            body: JSON.stringify(receipt)
        },

    );
    answer.ok ? dispatch(deleteReceipt(receipt))
        : console.log("Error deleting the receipt");
}


export { bringReceiptsHandler, saveReceiptHandler, deleteReceiptHandler }