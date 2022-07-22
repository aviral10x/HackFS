import Image from "next/image"
import React, { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"

const Competition = (props) => {
      const { enableWeb3, isWeb3Enabled, isWeb3EnableLoading, account, Moralis, deactivateWeb3 } =
          useMoralis()
 
  const [poap, setPoap] = useState([])


  const getPoap = async () => {
    
    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "X-API-Key": process.env.POAP_API_KEY,
        },
    }

    await fetch(
        "https://api.poap.tech/actions/scan/0x797eF74d45DaAEbD7ad0567E4b1BB5a03F51b31d",
        options
    )
        .then((response) => {
            return response.json()
        })
        .then((responseJson) => {
            // Handle the response
          console.log(responseJson)
          // responseJson.map((element)=>{console.log(element.event.name)})
        setPoap(responseJson)
        })

      .catch((err) => console.error(err))
  }
  useEffect(() => {
      if (isWeb3Enabled) {
          getPoap()
      }
  }, [isWeb3Enabled])

  return (
      <div>
          <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              // onClick={getPoap}
          >
              POAP
          </button>
          <div className="grid-row-1 ">
              {poap.map((element) => {
                  return (
                      <div className="flex" key={element.event.image_url}>
                          <img src={element.event.image_url} width="100" height="100" />
                      </div>
                  )
              })}
          </div>
      </div>
  )
}

export default Competition;