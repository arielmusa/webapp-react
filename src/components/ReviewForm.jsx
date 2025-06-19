export default function ReviewForm() {
  return (
    <div className="container">
      <form className="row gy-4 needs-validation">
        <div className="col">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" name="name" required />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="vote">
            Vote
          </label>
          <input className="form-control" type="number" name="vote" required />
        </div>
        <div className="col-12">
          <label htmlFor="text" className="form-label">
            Your feedback
          </label>
          <textarea className="form-control" name="text"></textarea>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
