const axios = require("axios");

const BASE_URL = "https://como-fazer-ba7b2.firebaseio.com/teste";
const AUTH = "Q7NosOydRWJDp82FBWnr9Y0U7F8cSsiuzyQ2ldnv";


const list = async key => {
  const content = await axios.get(BASE_URL + key + ".json?auth="+AUTH);
  if (content.data) {
    return Object.keys(content.data).map(key => {
      return {
        id: key,
        ...content.data[key]
      };
    });
  }

  return [];
};

const remove = async (key, id) => {
  await axios.delete(BASE_URL + key + "/" + id + ".json?auth="+AUTH);
  return true;
};

const get = async (key, id) => {
  const content = await axios.get(BASE_URL + key + "/" + id + ".json?auth="+AUTH);

  return {
    id,
    ...content.data
  };
};

const update = async (key, id, data) => {
  await axios.put(BASE_URL + key + "/" + id + ".json?auth=" + AUTH, data);
  return true;
};

const add = async (key, data) =>
  await axios.post(BASE_URL + key + ".json?auth="+AUTH, data);


module.exports = {
  list,
  update,
  remove,
  get,
  add
};
