import React, { useEffect, useState } from "react"
import LoadingBar from "react-top-loading-bar"
import Pedia from "../components/Pedia"
import Header from "../components/Header"

function plantsPedia() {
  const [progress, setProgress] = useState(0)
    return (
        <div>
            <LoadingBar height={3} color="#f11946" progress={progress} />
            <Header />
        </div>
    )
}

export default plantsPedia
