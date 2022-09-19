import { useRecoilState} from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinuteChange = (event:React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  
  const onHoursChange = (event:React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  }
  return (
    <>
      <input type="number" placeholder="Minutes" onChange={onMinuteChange} value={minutes}/>
      <input type="number" placeholder="Hours" onChange={onHoursChange} value={hours}/>
    </>
  );
}

export default App;
