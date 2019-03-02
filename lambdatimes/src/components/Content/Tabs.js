import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
          props.tabData.map(tab => (
            <div key={tab} className='tabs'>
              <h1>{tabs.headline}</h1>
              <img src={tabs.img} alt={tabs.author} />
              <h4>{tabs.author}</h4>
            </div>
         ))
        }       
      </div>
    </div>
  )

  selectTabHandler = event => {
    this.setState({
      tab: event.target.value
    })
  }

  selectedTab = event => {
    this.setState({
      tab: event.target.value
    })
  }

  // Make sure to use PropTypes to validate your types!
  Tab.PropTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        headline: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired, 
        type: PropTypes.arrayOf( 
          PropTypes.oneOf([
            'all',
            'javascript',
            'technology',
            'node',
            'React.js',
            'bootstrap'
          ])
        )
      })
    )
  };
}
export default Tabs;
