import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';




// class Tabs extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   render(){
//     return (
//       <div className="tabs">
//         <div className="topics">
//           <span className="title">TRENDING TOPICS:</span>
//           {/* map over the tabs provided on your props, create a new Tab component for each one.
//               give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
  
//             <div>
//               {this.props.tabs.map(tab => (
//                 <div>
//                   <Tab selectTabHandler={tab.selectTabHandler} selectedTab={tab.selectedTab} tab={tab.tab}/>
//                 </div>
//               ))}
//             </div>
  
//         </div>
//       </div>
//     );
//   }
// }

  





const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}

          <div>
            {props.tabs.map(tab => (
              <div>
                <Tab selectTabHandler={tab.selectTabHandler} selectedTab={tab.selectedTab} tab={tab.tab}/>
              </div>
            ))}
          </div>

      </div>
    </div>
  );
};



Tabs.propTypes = {
  tabs: PropTypes.array
}



// Make sure to use PropTypes to validate your types!
export default Tabs;
