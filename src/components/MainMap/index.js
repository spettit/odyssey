import React, {useState, useEffect} from 'react';
import Map from './Map'
import gps from "../../../static/assets/gps.json"
import getTime from 'date-fns/getTime'
import format from 'date-fns/format'
import add from 'date-fns/add'

var interval

const MainMap = () => {
    // const [point, setPoint] = useState(0)
    const [count, setCount] = useState(0)
    const startDate = new Date()

    const [theDate, setTheDate] = useState(new Date())
    const [lastPoint, setLastPoint] = useState({ lat: 0, lng: 0 });
    const [nextPoint, setnextPoint] = useState({ lat: 0, lng: 0 });
    const [lastPointIndex, setLastPointIndex] = useState(0);
    const [ markerCoords, setMarkerCoords ] = useState(null)

    const [points, setPoints] = useState([{
        "lat": 12.00444,
        "lng": -61.75222,
        "timestamp": 1422777600000,
        "altitude": "0.000000"
      }])


    useEffect(() => {
        console.log('init')
        setPoints(gps)
        setTheDate(new Date(points[0].timestamp))
        // setStartDate(moment(points[0].timestamp).clone())

        setMarkerCoords({lat: points[0].lat, lng: points[0].lng})
    }, [points])

    useEffect(() => {
        if (points && points.length > 0) {
          for (let i = lastPointIndex; i < points.length; i++) {
            if (points[i].timestamp > getTime(theDate)) {
              setLastPoint(points[i - 1]);
              setnextPoint(points[i]);
              setLastPointIndex(i - 1);
              return;
            }
          }
        }
        
      }, [count]);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    
      useEffect(() => {
        const duration =
          parseInt(nextPoint.timestamp) - parseInt(lastPoint.timestamp);
          console.log('duration: ', duration)
        const part = parseInt(theDate.valueOf()) - parseInt(lastPoint.timestamp);
        const fraction = part / duration;
        const markerlat =
          lastPoint.lat + (nextPoint.lat - lastPoint.lat) * fraction;
        const markerlng =
          lastPoint.lng + (nextPoint.lng - lastPoint.lng) * fraction;
        setMarkerCoords({ lat: markerlat, lng: markerlng });
        // console.log(markerlat, markerlng)
      }, [lastPoint, nextPoint, theDate, count]);
    
    //   // eslint-disable-next-line react-hooks/exhaustive-deps
      useEffect(() => setTheDate(add(theDate, {hours:1})), [count]);

    return (
        <div>
            <Map point={markerCoords} gps={points} />
            <button
        onClick={() => {
          interval = setInterval(() => {
            setCount(count => count + 1);
          }, 60);
        }}
      >
        run
      </button>
      <button onClick={() => clearInterval(interval)}>Stop</button>
      <div>{format(theDate, "dd MMMM yyyy HH:mm")}</div>
      {/* <div>startDate {startDate.format("DD/MM/YYYY HH:mm:ss")}</div>

      <div>count {count}</div>
      <div>lastPoint {JSON.stringify(lastPoint)}</div>
      <div>nextPoint {JSON.stringify(nextPoint)}</div>
      <div>lastPointIndex {lastPointIndex}</div> */}
        </div>
    );
};

export default MainMap;