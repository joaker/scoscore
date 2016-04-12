import React from 'react';
import { Link } from 'react-router'
import cnames from 'classnames/dedupe'

const pstyle = {marginBottom:'1.5em'};

const Main = (props) => (
  <div className="Main">
    <h2>Main</h2>
  <p style={pstyle}>
      Welcome!  Here's an application for rating spiciness
  </p>
  <p style={pstyle}>
      Step 1: Rate hot sauces with known scoville scores
  </p>
  <p style={pstyle}>
      Step 2: Rate the foods without scoville scores.  The scoville score will be estimated from past ratings
  </p>
  <p style={pstyle}>
      Step 3: Now spiciness indicator will be provided for new foods based on actual or estimated scoville scores
  </p>

  <button className={cnames('btn btn-block btn-primary-outline')}>Get Started!</button>

  { '' && 
    <p style={pstyle}>
      On the <Link to={`/Venue`}>Venue Page</Link>, you may generate a large guest list to fill a venue, then use the provided tool to watch as the random distribution moves towards an optimal arrangement.  Please note that very best arrangement for a given guest list may have unavoidable conflicts
    </p>
    }
  </div>
);

export default Main;
