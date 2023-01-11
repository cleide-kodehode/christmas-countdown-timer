
import './App.css';
import Title from "./components/Title";
import Counter from "./components/Counter";
import Christmas from "./img/christmas.png"
import useCountdown from "./hooks/useCountdown";
import Form from "./components/Form";


function App() {
  const [day, hour, minute, second] = useCountdown("dec 23, 2023 00:00:00");
  return (
    <div className="App" style={{ backgroundImage: `url(${Christmas})` }} >
      <div className="header">     
        <Title title="🎄countdown to Christmas 2023🎄" /> 
      </div>
        <div className="countdown-container">
          <Counter title="Days"number={day} /> 
          <Counter title="Hours"number={hour} />
          <Counter title="Minutes"number={minute} /> 
          <Counter title="Seconds"number={second} />    
        </div>        
          <Form />               
    </div>
  
    
  );
}

export default App;
        
      
