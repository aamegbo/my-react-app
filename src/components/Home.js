import React, { useState } from 'react';
import ReactDOM from "react-dom/client";



function Home() {
    return (
        <div class="">
            <form>
                <input type="text" placeholder="First name" name="fname" />
                <input type="text" placeholder="Last name" name="lname" />
                <input type="submit" />
            </form>
        </div>
      )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home/>);

export default Home;