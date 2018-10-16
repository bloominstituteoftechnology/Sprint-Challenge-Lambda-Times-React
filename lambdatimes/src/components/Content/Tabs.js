import React, {Component} from 'react';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.tabs[0]
    };
  }

  selectTabHandler = (tab) => {
    this.setState({activeTab: tab});
  }

  render() {
    const tabs = this.props.tabs

    return (
      <div className="tabs">
      <div className="topics">
      <span className="title">TRENDING TOPICS:</span>
      {
        tabs.map((data, index) => {
          return (<div>
            <Tab selectedTabHandler={this.props} selectedTab={this.props}  tabs={data} key={index}/>
          </div>)
        })
      }
    </div>
    </div>);
  }
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
