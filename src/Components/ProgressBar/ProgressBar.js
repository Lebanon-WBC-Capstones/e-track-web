// props example "maxValue="10" value="3" size="200px""
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressBar({ maxValue, value, size }) {
  const progress = (value / maxValue) * 100;
  let color = '';
  if (progress <= 30) color = '#FF4F4F';
  else if (progress < 70 && progress > 30) color = '#FFE604';
  else color = '#20C34E';

  return (
    <div style={{ width: size, height: size }}>
      <CircularProgressbar
        styles={buildStyles({
          pathColor: color,
          textColor: color,
        })}
        maxValue={maxValue}
        value={value}
        text={progress + '%'}
      />
    </div>
  );
}
