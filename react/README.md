# react
following this tutorial https://reactjs.org/tutorial/tutorial.html


# notes from tutorial
to remember things, components use **state**  
react components can have state by setting **this.state** in the constructor  

To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.