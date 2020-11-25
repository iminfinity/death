import axios from "axios";

const updateCountry = (country) => {
  switch (country) {
    case "United States of America":
      return "usa";
    default:
      return country.toLowerCase().replaceAll(" ", "-");
  }
};

const deaths = async (country) => {
  let total;
  const updatedCountry = updateCountry(country);
  try {
    const response = await axios.get(
      `https://api.covid19api.com/total/dayone/country/${updatedCountry}/status/deaths`
    );
    const data = response.data;
    const lastItem = data[data.length - 1];
    total = lastItem.Cases;
  } catch (error) {
    console.error(error);
  } finally {
    return total;
  }
  //   axios
  //     .get("https://api.covid19api.com/total/dayone/country/india/status/deaths")
  //     .then((response) => response.data)
  //     .then((array) => array[array.length - 1])
  //     .then((lastItem) => {
  //       total = lastItem.Cases;
  //       console.log("Inside", total);
  //     })
  //     .catch((error) => console.log(error));
  //   console.log("Outside", total);
};
export default deaths;
