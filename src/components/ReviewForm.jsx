import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router";

const initialDataForm = {
  name: "",
  vote: "",
  text: "",
};

const apiUrl = "http://localhost:3000";

export default function ReviewForm() {
  const [form, setForm] = useState(initialDataForm);
  const { id } = useParams();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${apiUrl}/movies/${id}/review`, form);
    setForm(initialDataForm);
  };

  return (
    <div className="container">
      <form className="row gy-4 needs-validation" onSubmit={handleSubmit}>
        <div className="col">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            onChange={handleChange}
            value={form.name}
            className="form-control"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="col">
          <label className="form-label" htmlFor="vote">
            Vote
          </label>
          <input
            onChange={handleChange}
            value={form.vote}
            className="form-control"
            type="number"
            name="vote"
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="text" className="form-label">
            Your feedback
          </label>
          <textarea
            onChange={handleChange}
            value={form.text}
            className="form-control"
            name="text"
          ></textarea>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
