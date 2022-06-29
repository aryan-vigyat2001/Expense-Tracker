import './Chart.css'
import ChartBar from './ChartBar'
const Chart=props=>{
    const value=props.dataPoints.map((e1)=>e1.value)
    const totalMax=Math.max(...value)
    return <div className="chart">
        {props.dataPoints.map(dataPoint=><ChartBar key={dataPoint.label}value={dataPoint.value} maxValue={totalMax} label={dataPoint.label}/>)}
    </div>
}

export default Chart;