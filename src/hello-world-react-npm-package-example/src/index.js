import useActiveToggle from './use-active-toggle';

export const HelloWorld = ({ name }) => {
  return (
    <div>
      <h1>Hello, { name ? name : 'World' }!</h1>
    </div>
  );
};

export default useActiveToggle;