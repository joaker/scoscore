import React from 'react';
import { Link } from 'react-router'

const pstyle = {marginBottom:'1.5em'};

const Main = (props) => (
  <div className="Main">
    <h2>Main</h2>
  <p style={pstyle}>
      Welcome!  Here's an application for rating spiciness
  </p>
  <p style={pstyle}>
      Step 1: Calibrate your scoville range
  </p>
  <p style={pstyle}>
      Step 2: Compare spiciness rating to your scoville tolerance
  </p>
  <p style={pstyle}>
      Step 3: Now you if your bland or ballistic for your tastes!  Great victory!
  </p>
{ ' <placeholder> ' ||
    <p style={pstyle}>
      On the <Link to={`/Venue`}>Venue Page</Link>, you may generate a large guest list to fill a venue, then use the provided tool to watch as the random distribution moves towards an optimal arrangement.  Please note that very best arrangement for a given guest list may have unavoidable conflicts
    </p>
}
  </div>
);

export default Main;
