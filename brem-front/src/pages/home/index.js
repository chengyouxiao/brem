import {
    Link,
  } from "react-router-dom";
  
export default function Home() {
    return (
      <div>
        Pending Items
        <nav>
          <Link to="/pay">Pay</Link>
        </nav>
      </div>
    );
  };