export default function ReviewsList({ data }) {
  return (
    <div className="container">
      <div className="row">
        <ul clasems="list-group">
          {data.map((review) => (
            <li className="list-group-item">
              {review.name}, {review.text}, {review.vote}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
