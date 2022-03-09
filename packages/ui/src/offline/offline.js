import React, { useEffect } from "react"
import { Detector } from "react-detect-offline"
import Toast from "cogo-toast"

// @todo: use Context instead of globals
let hideToast = () => {}
let wasOffline = false

const Offline = ({ text }) => {
  useEffect(() => {
    const { hide } = Toast.warn(text, {
      position: "bottom-center",
      hideAfter: 0,
      onClick: () => {
        hide()
      },
    })
    hideToast = hide
    wasOffline = true
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return null
}

const Online = ({ text }) => {
  useEffect(() => {
    hideToast()

    if (wasOffline) {
      wasOffline = false
      setTimeout(() => {
        Toast.success(text, {
          position: "bottom-center",
        })
      }, 1000)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return null
}

export const OfflineDetector = ({
  textOn = "De nouveau connecté à Internet !",
  textOff = "Aucune connexion Internet !",
}) => {
  return (
    <Detector
      render={({ online }) =>
        !online ? <Offline text={textOff} /> : <Online text={textOn} />
      }
    />
  )
}
