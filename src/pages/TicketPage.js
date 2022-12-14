import React, { useState } from "react";

const TicketPage = () => {
  const [formData, setFormData] = useState({
    status: "not started",
    progress: 0,
    timestamp: new Date().toISOString(),
  });

  const editMode = false;

  const handleSubmit = () => {
    console.log("hello submit");
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(formData);

  const categories = ["test1", "test2"];

  return (
    <div className="ticket">
      <h1>
        {editMode ? "Update your Ticket" : "Create a new Ticket"}
        <div className="ticket-container">
          <form onSubmit={handleSubmit}>
            <section>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.title}
              />
              <label htmlFor="description">Description</label>
              <input
                id="description"
                name="description"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.description}
              />

              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                {categories?.map((category, _index) => (
                  <option key={_index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <label htmlFor="new-category">New Category</label>
              <input
                id="new-category"
                name="category"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.category}
              />

              <label>Priority</label>
              <div className="multiple-input-container">
                <input
                  id="priority-1"
                  name="priority"
                  type="radio"
                  onChange={handleChange}
                  value={1}
                  checked={formData.priority === 1}
                />
                <label htmlFor="priority-1">1</label>
                <input
                  id="priority-2"
                  name="priority"
                  type="radio"
                  onChange={handleChange}
                  value={2}
                  checked={formData.priority === 2}
                />
                <label htmlFor="priority-2">2</label>
                <input
                  id="priority-3"
                  name="priority"
                  type="radio"
                  onChange={handleChange}
                  value={3}
                  checked={formData.priority === 3}
                />
                <label htmlFor="priority-3">3</label>
                <input
                  id="priority-4"
                  name="priority"
                  type="radio"
                  onChange={handleChange}
                  value={4}
                  checked={formData.priority === 4}
                />
                <label htmlFor="priority-4">4</label>
                <input
                  id="priority-5"
                  name="priority"
                  type="radio"
                  onChange={handleChange}
                  value={5}
                  checked={formData.priority === 5}
                />
                <label htmlFor="priority-5">5</label>
              </div>

              {editMode && (
                <>
                  <input
                    type="range"
                    id="progress"
                    name="progress"
                    value={formData.progress}
                    min="0"
                    max="100"
                    onChange={handleChange}
                  />
                  <label htmlFor="progress">Progress</label>

                  <label htmlFor="status">Status</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="done" selected={formData.status === "done"}>
                      Done
                    </option>
                    <option
                      value="working on it"
                      selected={formData.status === "working on it"}
                    >
                      Working on it
                    </option>
                    <option
                      value="stuck"
                      selected={formData.status === "stuck"}
                    >
                      Stuck
                    </option>
                    <option
                      value="not started"
                      selected={formData.status === "not started"}
                    >
                      Not started
                    </option>
                  </select>
                </>
              )}

              <input type="submit" />
            </section>
            <section>
              <label htmlFor="owner">Owner</label>
              <input
                id="owner"
                name="owner"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.owner}
              />
              <label htmlFor="avatr">Avatar</label>
              <input
                id="avatar"
                name="avatar"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.avatar}
              />
              <div className="img-preview">
                {formData.avatar && (
                  <img src={formData.avatar} alt="img-preview" />
                )}
              </div>
            </section>
          </form>
        </div>
      </h1>
    </div>
  );
};

export default TicketPage;
