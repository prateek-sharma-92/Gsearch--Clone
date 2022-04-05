// // info = {input}

const submitSearch = (info) => {
  return {
    type: "SEARCH",
    payload: info,
  };
};

export default submitSearch;
