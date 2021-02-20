// props example "maxValue="10" value="3" color="red" size="200px""
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressBar({ maxValue, value, color, size }) {
  return (
    <div style={{ width: size, height: size }}>
      <CircularProgressbar
        styles={buildStyles({
          pathColor: color,
          textColor: color,
        })}
        maxValue={maxValue}
        value={value}
        text={(value / maxValue) * 100 + '%'}
      />
    </div>
  );
}
