
const Header = (props) => {
  return (
      <>
    <div class="d-flex align-items-center p-3 my-3 text-white bg-danger rounded shadow-sm">
      <div class="lh-1">
        <h1 class="h6 mb-0 text-white lh-1">{props.name}</h1>
      </div>
    </div>
    </>
  );
};

export default Header;
