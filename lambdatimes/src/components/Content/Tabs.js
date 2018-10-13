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

    console.log('test', this.state.activeTab);

    return (<div className="tabs">
      <div className="topics">

        {
          tabs.map((child, index) => {
            const {label} = this.props;

            return (<Tab activeTab={this.state.activeTab} key={index} label={child} onClick={this.selectTabHandler}/>);
          })
        }

        <div className="tab-content">
          <span className="title">TRENDING TOPICS:</span>
          {
            tabs.map((data, index) => {
              return <Tab selectedTabHandler={this.props} selectedTab={this.props} allTabs ={tabs} tabs={data} index={index} key={data.index}/>
            })
          }

          {/* {tabs.map((tabNames) => {
            if (this.state.child !== this.state.activeTab) return undefined;
            return this.state.child; */
          } {/* })} */
          }
        </div>

        {/* {tabs.map((child) => {
            const { label } = child.props;


        {tabs.map((data, index)   =>  {
                      return  <Tab  onClick={this.selectTabHandler} allTabs ={tabs} text={data} index={index} key={data.index}/>})}
        {/* map over the tabs provided on your props, create a new Tab component for each one. */
        } {/* give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props */
        }
        </div>
    </div>);
      }
    };

    // Make sure to use PropTypes to validate your types!
    export default Tabs;
