import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';


class Tabs extends React.Component{
  constructor(){
    super();
    this.state = {
      tabs: []
    }
  }

  componentDidMount(){
    this.setState({tabs: this.props.tabs})
    const tabsArray = this.props.tabs
    console.log(tabsArray)
    console.log(this.props.tabs)
  }

  render(){
    return (
      <div className="tabs">
        <div className="topics">
          <span className="title">TRENDING TOPICS:</span>
          {/* map over the tabs provided on your props, create a new Tab component for each one.
              give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
              {this.props.tabs.map(tab => (
                <div>
                  <Tab selectTabHandler={tab.selectTabHandler} selectedTab={tab.selectedTab} tab={tab.tab}/>
                  {/* <Tab selectTabHandler={this.selectTabHandler} selectedTab={this.selectedTab} tab={this.tab}/> */}
                </div>
              ))}
        </div>
      </div>
    );
  }
}

  


  





// const Tabs = props => {
//   return (
//     <div className="tabs">
//       <div className="topics">
//         <span className="title">TRENDING TOPICS:</span>
//         {/* map over the tabs provided on your props, create a new Tab component for each one.
//             give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}

//           <div>
//             {props.tabs.map(tab => (
//               <div>
//                 <Tab selectTabHandler={tab.selectTabHandler} selectedTab={tab.selectedTab} tab={tab.tab}/>
//               </div>
//             ))}
//           </div>

//       </div>
//     </div>
//   );
// };



Tabs.propTypes = {
  tabs: PropTypes.array
}



// Make sure to use PropTypes to validate your types!
export default Tabs;
