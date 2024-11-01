import ReactDOM from "react-dom/client";

export const metadata = {
  title: 'About - StreamApp',
  description: 'Basics in stream managment',
};

//This Represents the about page
function About() {
  return (
    <div id= "flex-container">
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