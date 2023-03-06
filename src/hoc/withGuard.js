import { useSelector } from 'react-redux';
const withGuard = (Component) => {
  const Wrapper = (props) => {
    const { isLoggedIn } = useSelector((state) => state.auth);
    return isLoggedIn ? <Component {...props} /> : <>Please Log In First !</>;
  };
  return Wrapper;
};
export default withGuard;
