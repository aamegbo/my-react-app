import ReactDOM from "react-dom/client";

function About() {
  return (
    <div className= "row">
      <div className="column.all">
        <p>About</p>
        <p>The about page</p>
      </div>
      </div>
    
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<About/>);

export default About;