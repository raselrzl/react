import logo from './logo.svg';
import './App.css';
import Greet from './Component/Greet';
import Welcome from './Component/welcome';
import Hello from './Component/Hello';
import Message from './Component/Message';
import Counter from './Component/Counter';
import Destr from './Component/destr';
import FunctionClick from './Component/FunctionClick';
import ClassClick from './Component/ClassClick';
import EventBind from './Component/EventBind';



function App() {
  return (
    
    <div className="App">

   <EventBind />
      {/* <Destr name="Tanim" hName="Good" /> */}
      {/* <Welcome name="Tanim" hName="Good"/> */}
     {/* /*  <FunctionClick />
      <ClassClick /> */ }
      
     {/*  ¨<Counter /> */}
     {/*  <Message /> */}
     {/*  <Greet name="Tanim" hName="Good">
        <p>This is children</p>
      </Greet>
      <Greet name="Sobur" hName="Awsome">
        <button>Action</button>
      </Greet>
      <Greet name="Juman" hName="Best"/>
      <Greet name="Rasel" hName="Better"/>
      <Welcome name="Tanim" hName="Good"/>
      <Welcome name="Sobur" hName="Awsome"/>
      <Welcome name="Sobur" hName="Awsome"/>
     {/*  <Hello /> */}
    </div>
  );
}

export default App;
