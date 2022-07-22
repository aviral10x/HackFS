import React, { useEffect, useState } from "react"
import LoadingBar from "react-top-loading-bar"
import Competition from "../components/Competition"
import Header from "../components/Header"

function poap() {
    const [progress, setProgress] = useState(0)
    return (
        <>
            <LoadingBar height={3} color="#f11946" progress={progress} />
            <Header />
            <Competition/>
        </>
    )
}

export default poap
