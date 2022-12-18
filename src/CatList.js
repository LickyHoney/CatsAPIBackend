import React, { useState, useEffect } from "react";

import Search from "./Search";
import Loading from "./Loading";
import service from "./services/CatAPIService";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const CatList = (props) => {
  // Declarations
  const [cats, setCats] = useState([]);
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [postsPerPage] = useState(8);
  const [offset, setOffset] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [weight, setWeight] = useState("");
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [breed_group, setBreedGroup] = useState("");
  const [detail, setDetail] = useState([]);

  // Fetching the cats data using useEffect hook.

  useEffect(() => {
    service.getAll().then((res) => {
      console.log(res);
      const data = res.data;

      const indexOfLastTodo = offset * postsPerPage;
      const indexOfFirstTodo = indexOfLastTodo - postsPerPage;
      const cats = data.slice(indexOfFirstTodo, indexOfLastTodo);

      debugger;

      console.log(data);

      setTimeout(() => {
        setCats(cats);
        setIsLoading(false);
      }, 700);
      setPageCount(Math.ceil(data.length / postsPerPage));
      setIsLoading(true);
    });
  }, [search, postsPerPage, offset]);

  // To get the cat by id
  const handleViewCat = (id) => {
    service.getCat(`${id}`).then((res) => {
      console.log(res);
      setDetail([res.data]);
    });
  };

  const handlePageClick = (event) => {
    setOffset(Number(event.target.id));
  };

  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

  //rendering pagination
  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <div className="page">
        <li className="pagenumbers">
          <button
            className={`${offset === number ? "text-success" : ""} `}
            key={number}
            id={number}
            onClick={handlePageClick}
          >
            {number}
          </button>
        </li>
      </div>
    );
  });

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  //To delete a cat
  const handleDelete = (id) => {
    debugger;
    service.deleteCat(`${id}`).then((res) => {
      console.log(res);
      setCats(
        cats.filter((cat) => {
          return cat.id !== id;
        })
      );
      if (res.data.status === 200) alert("Success!");
    });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };
  const handleBreedChange = (e) => {
    setBreedGroup(e.target.value);
  };

  //To add a cat.
  const handleSubmit = () => {
    const newCat = {
      id: uuidv4,
      name: name,
      weight: weight,
      breed_group: breed_group
    };
    if (!id) {
      service.AddCat(newCat).then((response) => {
        setCats([response.data, ...cats]);
        alert("New cat is added successfully")
      });
    } else {
      alert("This cat is already exists");
    }
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openAddModal = () => setIsAddOpen(true);
  const closeAddModal = () => setIsAddOpen(false);

  // To handle the sort in front end
  const handleSort = () => {
    const sortedData = [...cats].sort((a, b) => {
      return a.first > b.first ? 1 : -1;
    });
    setCats(sortedData);
  };

  //To handle the search filter in front end
  const handleSearch = () => {
    debugger;
    service.getAll().then((res) => {
      console.log(res);
      const data = res.data;

      const filteredCats = data.filter((cat) => {
        return JSON.stringify(cat).toLowerCase().includes(search.toLowerCase()); //filter condition for search by breed data.
      });
      debugger;

      const catsSearch = filteredCats.slice(0, postsPerPage);
      setCats(catsSearch);
      debugger;
    });
  };

  //Rendering the UI
  return (
    <div className="container">
      <div className="container">
        <header id="myheader" className="header-dark">
          Cats
        </header>
      </div>
      <Search
        searchChange={onSearchChange}
        searchClick={() => {
          handleSearch(cats.name);
        }}
      />
      <div className="btn-group">
        <button
          style={{
            justifyContent: "center",
            marginTop: "52px",
            marginRight: "-150px",
            color: "#ab47bc",
            fontWeight: 900,
            background: "#588ced;"
          }}
          onClick={handleSort}
        >
          ⇅ Sort
        </button>

        <button
          style={{
            justifyContent: "center",
            marginTop: "52px",
            marginRight: "-140px",
            color: "#ab47bc",
            fontWeight: 900,
            background: "#588ced;"
          }}
          onClick={openAddModal}
        >
          Add Cat
        </button>
      </div>

      <Modal show={isAddOpen} onHide={closeAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new Cat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              <label>
                Name:
                <input type="text" name="name" onChange={handleNameChange} />
              </label>
              <br />
              <label>
                Weight:
                <input type="text" name="name" onChange={handleWeightChange} />
              </label>
              <br />
              <label>
                Breed Group:
                <input type="text" name="name" onChange={handleBreedChange} />
              </label>
              <br />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleSubmit();
              closeAddModal();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      {!search && isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="list">
            <table>
              <thead>
                <tr
                  className="colhead"
                  style={{ color: "crimpson", backgroundColor: "burlywood" }}
                >
                  <th scope="col">Name</th>
                  <th scope="col">Breed Group</th>
                  <th scope="col">Weight</th>
                  <th scope="col">View</th>
                  <th scope="col">Delete a Cat</th>
                </tr>
              </thead>
              {cats.map((cat, i) => (
                <tbody>
                  <tr key={cat.id}>
                    <td data-label="Name">{cat.name}</td>
                    <td data-label="Breed Group">{cat.breed_group}</td>
                    <td data-label="Weight">{cat.weight}</td>
                    <td data-label="View">
                      <button
                        variant="primary"
                        onClick={() => {
                          handleViewCat(cat.id);
                          openModal();
                        }}
                      >
                        View Cat
                      </button>
                    </td>
                    <td>
                      <button
                        variant="primary"
                        onClick={() => {
                          handleDelete(cat.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
            {detail.map((detail) => (
              <Modal show={isOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                  <Modal.Title>{detail.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="card">
                    <div className="card-body">
                      <p>Breed Group: {detail.breed_group}</p>
                      <p>Weight: {detail.weight}</p>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={closeModal}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            ))}
          </div>
        </>
      )}
      <ul id="page-numbers" className="pagination">
        {renderPageNumbers}
      </ul>
    </div>
  );
};

export default CatList;
