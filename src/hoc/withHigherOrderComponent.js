const withHigherOrderComponent = (Component) => (props) => {
  return <Component {...props} myParam={5} />;
};

export default withHigherOrderComponent;
