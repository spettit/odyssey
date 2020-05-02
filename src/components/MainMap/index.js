import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Map from "./Map"
// import gps from "../../../static/assets/gps.json"
import getTime from "date-fns/getTime"
import format from "date-fns/format"
import add from "date-fns/add"

var interval

const MainMap = props => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allGpsJson {
        edges {
          node {
            lat
            lng
            timestamp
          }
        }
      }
    }
  `)

  // const [point, setPoint] = useState(0)
  const [count, setCount] = useState(0)
  const startDate = new Date()

  const [theDate, setTheDate] = useState(new Date())
  const [lastPoint, setLastPoint] = useState({ lat: 0, lng: 0 })
  const [nextPoint, setnextPoint] = useState({ lat: 0, lng: 0 })
  const [lastPointIndex, setLastPointIndex] = useState(0)
  const [markerCoords, setMarkerCoords] = useState(null)

  const [points, setPoints] = useState([])

  useEffect(() => {
    setPoints(data.allGpsJson.edges.map(n => n.node))
  }, [])

  useEffect(() => {
    if (points.length > 1) {
      setTheDate(new Date(points[0].timestamp))
      setMarkerCoords({ lat: points[0].lat, lng: points[0].lng })
    }
  }, [points])

  useEffect(() => {
    if (points && points.length > 0) {
      for (let i = lastPointIndex; i < points.length; i++) {
        if (points[i].timestamp > getTime(theDate)) {
          setLastPoint(points[i - 1])
          setnextPoint(points[i])
          setLastPointIndex(i - 1)
          return
        }
      }
    }
  }, [count])

  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    const duration =
      parseInt(nextPoint.timestamp) - parseInt(lastPoint.timestamp)
    
    const part = parseInt(theDate.valueOf()) - parseInt(lastPoint.timestamp)
    const fraction = part / duration
    // console.log("fraction: ", fraction)
    const markerlat = lastPoint.lat + (nextPoint.lat - lastPoint.lat) * fraction
    const markerlng = lastPoint.lng + (nextPoint.lng - lastPoint.lng) * fraction
    setMarkerCoords({ lat: markerlat, lng: markerlng })
    // console.log(markerlat, markerlng)
  }, [count])

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setTheDate(add(theDate, { hours: 1 })), [count])

  return (
    <div>
      <Map point={markerCoords} gps={points} />
      <button
        onClick={() => {
          interval = setInterval(() => {
            setCount(count => count + 1)
          }, 60)
        }}
      >
        run
      </button>
      <button onClick={() => clearInterval(interval)}>Stop</button>
      <div>{format(theDate, "dd MMMM yyyy HH:mm")}</div>
      <pre>{JSON.stringify(markerCoords)}</pre>
      {/* <div>startDate {startDate.format("DD/MM/YYYY HH:mm:ss")}</div>

      <div>count {count}</div>
      <div>lastPoint {JSON.stringify(lastPoint)}</div>
      <div>nextPoint {JSON.stringify(nextPoint)}</div>
      <div>lastPointIndex {lastPointIndex}</div> */}
    </div>
  )
}

export default MainMap
