export const Pagination = ({ active, size, step, onClickHandler }) => {
  const showingNumbers = step * 2 + 1;
  let startNumber = 2;
  let startArrayNumber = step;

  let needStartDots = false;
  let needEndDots = false;

  if (active > step) {
    startArrayNumber = active - step;
    needStartDots = active > step + startNumber ? true : false;
  }

  if (size > showingNumbers) {
      needEndDots = size > active + step + 1 ? true : false;
      if (size < active + step + 1) {
        startArrayNumber = size - showingNumbers;
      }
  }

  let contentNumber;

  return (
    <ul>
      {active > 1 ? (
        <li
          className="page-item"
          onClick={() => onClickHandler(active - 1)}
        >
          prev
        </li>
      ) : (
        <li className="page-item disabled">prev</li>
      )}
      {size > showingNumbers + startNumber ? (
        <>
          <li
            onClick={(e) => onClickHandler(e.currentTarget.textContent)}
            className={`page-item ${active === 1 && "active"}`}
          >
            1
          </li>

          {needStartDots && <span>...</span>}
          {Array.from({ length: showingNumbers }, (_, i) => {
            contentNumber = needStartDots
              ? startArrayNumber + i
              : startNumber + i;
            return (
              <li
                key={i}
                className={`page-item ${active === contentNumber && "active"}`}
                onClick={(e) => onClickHandler(e.currentTarget.textContent)}
              >
                {contentNumber}
              </li>
            );
          })}
          {needEndDots && <span>...</span>}
          <li
            className={`page-item ${active === size && "active"}`}
            onClick={(e) => onClickHandler(e.currentTarget.textContent)}
          >
            {size}
          </li>
        </>
      ) : (
        ((startArrayNumber = 1),
        Array.from({ length: size }, (_, i) => {
          contentNumber = i + 1;
          return (
            <li
              key={i}
              className={`page-item ${active === contentNumber && "active"}`}
              onClick={(e) => onClickHandler(e.currentTarget.textContent)}
            >
              {contentNumber}
            </li>
          );
        }))
      )}
      {active < size ? (
        <li
          className="page-item next arrow-icon"
          onClick={() => onClickHandler(active + 1)}
        >
          next
        </li>
      ) : (
        <li className="page-item next arrow-icon disabled">next</li>
      )}
    </ul>
  );
};
