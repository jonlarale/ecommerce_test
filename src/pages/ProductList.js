import { Fragment, useEffect, useState, useCallback, useRef } from "react";
import ImgMediaCard from "../components/ImgMediaCard";
import SimplePaper from "../components/SimplePaper";
import DownloadIcon from "@mui/icons-material/Download";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./../components/Navbar";
import { getItemsByQuery } from "../redux/actions/items";
import { connect } from "react-redux";
import SkeletonStack from "./../components/SkeletonStack";

/*
This is the main page. It stores the obteined items via API in Redux (see Redux folder).
It isn't already finished. The drag and drop container it doesn't work yet. There is 
a library React Draggable which can be usefull to solve this (url: https://www.npmjs.com/package/react-draggable).
Also the shopping cart is not connected yet. This can be solve with a reducer to add as a counter items or to remove them.
*/

const ProductList = ({ getItemsByQuery, search_items, raw_data }) => {
  // This function activate a notification when someone add an item to the cart.
  const notify = () => {
    toast.success("Your item was successfully added to the cart!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [loadingState, setLoadingState] = useState(true);
  const [items, setItems] = useState(search_items);

  //An effect to load a new query page whenever the last one items is reached
  useEffect(() => {
    setLoadingState(true);
    getItemsByQuery(query, page);
    console.log(page);
  }, [query, page]);

  //This effect joins the items of previous pages with the new ones.
  useEffect(() => {
    if (search_items !== null) {
      setItems((prevItems) => {
        return [...prevItems, ...search_items];
      });
    }
    setLoadingState(false);
  }, [search_items]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoadingState(true);
    setQuery(e.target["query"].value);
    setPage(1);
    setItems([]);
  };

  // An observer to identify when the last one item is reached
  const observer = useRef();
  const lastItem = useCallback(
    (node) => {
      if (loadingState) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadingState]
  );

  return (
    <Fragment>
      <header>
        <Navbar onSubmit={onSubmitHandler} />
      </header>
      <div className="container">
        <div
          className="row mt-4 d-flex flex-column pl-0 pr-0"
          style={{
            position: "sticky",
            top: "0px",
            zIndex: "1",
            backgroundColor: "rgba(231, 235, 240,0.8)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="d-flex justify-content-center w-100">
            <SimplePaper>
              <div className="container h-100 w-100">
                <div className="row mx-auto h-100">
                  <div className="col-4 my-auto">
                    <DownloadIcon sx={{ fontSize: 40 }} />
                  </div>
                  <div className="col-8 my-auto">
                    <span>DRAG AND DROP YOUR ITEMS HERE</span>
                  </div>
                </div>
              </div>
            </SimplePaper>
          </div>
          <h6 className="mt-4 mb-4 pl-4">RESULTS</h6>
        </div>
        <div className="d-flex flex-wrap justify-content-around">
          {items &&
            loadingState !== true &&
            items !== null &&
            items.map((item, index) => {
              if (item.canAddToCart) {
                if (items.length === index + 1) {
                  return (
                    <ImgMediaCard
                      key={index}
                      name={item.name}
                      price={item.price}
                      imgSrc={item.image}
                      ref={lastItem}
                      onClick={notify}
                    />
                  );
                } else {
                  return (
                    <ImgMediaCard
                      key={index}
                      name={item.name}
                      price={item.price}
                      imgSrc={item.image}
                      onClick={notify}
                    />
                  );
                }
              }
            })}
          {loadingState ? (
            <div style={{ visibility: "visible" }}>
              <SkeletonStack />
            </div>
          ) : (
            <div style={{ visibility: "hidden" }}></div>
          )}
        </div>

        <div>
          <ToastContainer autoClose={5000} />
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  search_items: state.Items.search_items,
  raw_data: state.Items.data,
});
export default connect(mapStateToProps, {
  getItemsByQuery,
})(ProductList);
