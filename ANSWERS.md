1. What are PropTypes used for?
    
    Checking the type of data that is being passed in.

    This ensure the quality of the data and helps prevent errors in the code due to the code not being able to process the data correctly being that it isn't set up to process another type of data.

    This also helps other developers working on the code understand it and know what can be passed where. 


2. Describe life-cycle event in React. 

    As the name implies this is the lifecycle of React componets. Much like regular life it goes through Mounting at the beginning, which is the initial data being passed into the component, a Growth phase which includes changing of the data though use of set state and possible other methods, and the un-mounting phase which is the when the component is removed. 


3. Explain the details of a HOC? 

    HOC are components that take another component as an argument. this allows for reusable componets and their logic/ properties with only having to type it out once. Properties can include state, other functions ext. 

4. What are 3 different ways to style components in React?

    1. Import a style sheet. 
      A. This is simple to set up, allows for all the functionallity that comes with css including using pre-processors.
      B. Goood for a quick draw up.
    
    2. Inline Styles
      A. Quick to do. Very explcit in what is being styled.
      B. Can be bad do the the specificity that comes with this type of styling

    3. Import a Library
      A. Provides for added functionality as well a quick styling due to the pre defined styles in the libraries.
      B. Allows for consistent styling acrossed the platform with minimal amount of coding time. 
