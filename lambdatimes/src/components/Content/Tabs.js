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
  }

  // // pick up here: now that you've linked that selectTabHandler function to the actual tab(s)
  // // see if you can get the tab that is selected (selectedTab?) to show up in the alert
  // // see the search bar from instagram as hint
  // // also realize props dont' have to be tab.selectedTab, could be this.selectedTab
  // selectTabHandler = (event) => {
  //   this.selectedTab();
  //   this.setState({tabs: event.target.value})
  //   alert('selected click')
  //   console.log(event.target.value)
  // }
  
  // selectedTab = () => {
  //   const tabs = document.querySelectorAll('.tab');
  //   tabs.forEach((e) => {e.classList.remove('active-tab')});
  //   // this.e.classList.add('active-tab');
  //   // const cards = document.querySelectorAll('.card');
  //   // cards.forEach((e) => {e.style.display = 'none';})
  //   // this.cards.forEach(card => card.)

  // }

  render(){
    return (
      <div className="tabs">
        <div className="topics">
          <span className="title">TRENDING TOPICS:</span>
          {/* map over the tabs provided on your props, create a new Tab component for each one.
              give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
              {this.props.tabs.map(tab => (
                <div>
                  <Tab selectTabHandler={this.props.selectTabHandler} 
                    selectedTab={this.props.selectedTab}
                    selectedProp={tab}
                  />
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
