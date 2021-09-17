const LIMIT = 10;
const PeopleTablePagination = ({ page, total, onChange = () => {} }) => {
  const totalPage = Math.ceil(total / LIMIT);
  return (
    <ul className="pagination">
      {Array.from({ length: totalPage }, (_, index) => index + 1).map(
        (pageIndex) => {
          const isActive = pageIndex === page;
          const action = () => {
            if (pageIndex !== page) {
              onChange(pageIndex);
            }
          };
          return isActive ? (
            <li className="active" key={pageIndex} onClick={action}>
              <a> {pageIndex}</a>
            </li>
          ) : (
            <li className="waves-effect" key={pageIndex} onClick={action}>
              <a>{pageIndex}</a>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default PeopleTablePagination;
