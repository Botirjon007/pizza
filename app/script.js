// States
const [name, setName] = useState("");
const [phone, setPhone] = useState();
const [address, setAddress] = useState("");
const [dough, setDough] = useState("thin");
const [size, setSize] = useState("25");
const [toppings, setToppings] = useState([]);
const [additions, setAdditions] = useState([]);
const [subjects, setSubjects] = useState([]);

// Example pricing logic
const basePrice = 10; // Base price for a pizza
const toppingsPrice = 2; // Additional price per selected topping
const additionsPrice = 3; // Additional price per selected addition

// Calculate the total based on the selected options
const toppingCost = toppings.length * toppingsPrice;
const additionCost = additions.length * additionsPrice;
const total = basePrice + toppingCost + additionCost;
return total;

// Handle Subject List

const handleAddSubject = (e) => {
  e.preventDefault();
  const order = {
    name,
    phone,
    address,
    dough,
    size,
    toppings,
    additions,
    total: calculateTotal(), // Calculate and include the total in the order
  };

  setToppings([]); // Reset toppings for the next order
  setAdditions([]); // Reset additions for the next order
  // You can validation and further processing here

  setSubjects((prevSubjects) => [...prevSubjects, order]);
  // optionally, you can reset the form inputs here
  setName("");
  setPhone();
  setAddress("");
  setDough("thin");
  setSize("25");
};
