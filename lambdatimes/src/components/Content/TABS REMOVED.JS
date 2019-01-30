props.tabs.map()(tab => {
  <Tab tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} />
})