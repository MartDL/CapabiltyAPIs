import React, { useState, useEffect } from 'react'
import qlikApp from '../utils/qlikApp'

const QlikContext = React.createContext(null)
export default QlikContext

let config = {
    host: 'localhost',
    secure: false,
    port: '4848',
    prefix: '',
    appId: 'Consumer Sales.qvf'
  }

const QlikProvider = ({ children }) => {
  const [app, setApp] = useState(null)
  useEffect(() => {
    qlikApp(config).then((qlikObjects) => {
      // console.log('app returned')
      setApp(qlikObjects.app)
      // const qlik = qlikObjects.qlik
    })
  }, [])

  return <>{app && <QlikContext.Provider value={{ app }}>{children}</QlikContext.Provider>}</>
}

export { QlikProvider }