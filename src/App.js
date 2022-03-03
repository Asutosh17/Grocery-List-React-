
import './App.css';

function App() {
  const os =  ["Android","Blackberry","iPhone","Windows"]
  const name = ["Samsumg","HTC","Micromax","Apple"];
  return (
    <>
    <h1>Mobile Operating System</h1>
    <div>{os.map((e)=>(<ul><li>{e}</li></ul>))}</div>

    <h1>Mobile Manufacturers</h1>
    <div><ul type="square"><li>{name[0]}</li></ul></div>
    <div><ul type="square"><li>{name[1]}</li></ul></div>
    <div><ul type="disc"><li>{name[2]}</li></ul></div>
    <div><ul type="circle"><li>{name[0]}</li></ul></div>
    </>
  );
}

export default App;
