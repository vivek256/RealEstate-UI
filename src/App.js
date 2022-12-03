import './App.css';
import cardValues, { property_type, location } from './Card_Values';
import React, { useState } from 'react'




function App() {

  const [propertyType, setPropertyType] = useState('Select...');
  const [Location, setLocation] = useState('Select...');
  const [cards, setCards] = useState(cardValues)


  // Wrote below values for filtering purposes
  let cards_property_type = cardValues, cards_location = cardValues, cards_priceRange = cardValues, cards_date = cardValues;

  function SelectComponent(props) { // Dropdown custom select component

    function setValue(event) {
      if (props.type == 'property') {
        setPropertyType(event.target.innerText)
      } else if (props.type == 'location') {
        setLocation(event.target.innerText)
      }
    }

    return <>
      <div class="dropdown">
        <div class="dropdown-select">
          <span class="select">{props.state}</span>
          <i class="fa fa-caret-down icon"></i>
        </div>
        <div class="dropdown-list">{props.arr.map((val) => { return <div class="dropdown-list__item" onClick={setValue}>{val}</div> })}</div>
      </div></>
  }

  
  
  
  
  
  function Header() {
    return <header>
      <nav className="navbar">
        <div className="first-div">
          <div className="first">
            <i class="house-symbol fa-solid fa-house"></i>
            <a href="#">Estatery</a>
          </div>
          <div className="second">
            <a href="#">Rent</a>
            <a href="#">Buy</a>
            <a href="#">Sell</a>
            <a href="#">Favourites</a>
            <a href="#">Manage Property<i class="down-symbol fa-solid fa-angle-down"></i></a>
            <a href="#">Resources<i class="down-symbol fa-solid fa-angle-down"></i></a>
          </div>
        </div>
        <div className="second-div">
          <a href="#" className="login">
            Login
          </a>
          <a href="#" className="signup">
            Signup
          </a>
        </div>
      </nav>
    </header>
  }

  
  
  
  
  
  function Middle() {
    
    
    
    
    const [from, setFrom] = useState('')  // Range of from Input 
    const [to, setTo] = useState('')     // Range of to Input 
    const [date, setDate] = useState('')  // Date Input 

    function handleSearch(event) {

      if (propertyType !== 'Select...') {   //Filtering Property Type
        cards_property_type = cards_property_type.filter((val) => {
          return val.property_type === propertyType;
        })
        setCards(cards_property_type)
      }

      if (Location !== 'Select...') {      //Filtering Location Type
        cards_location = cards_property_type
        cards_location = cards_location.filter((val) => {
          return val.location === Location;
        })
        setCards(cards_location)
      }

      if ((from !== '') && (to !== '')) {  // Filtering Price Range
        cards_priceRange = cards_location
        cards_priceRange = cards_priceRange.filter((val) => {
          let value = parseFloat(val.price.slice(1, val.price.length).replace(/,/g, '')) //convert from dollar and comma format
          return (value >= from) && (value <= to);
        })
        setCards(cards_priceRange)
      }

      if (date !== '') {   //Filtering Date
        cards_date = cards_priceRange
        cards_date = cards_date.filter(val => { return new Date(val.moveInDate) - new Date(date) >= 0 })
        setCards(cards_date)
      }
    }

    
    
    function handleFromInput(event) {
      setFrom(event.target.value)
    }

    function handleToInput(event) {
      setTo(event.target.value)
    }

    function handleDate(event) {
      setDate(event.target.value)
    }

    
    
    return <>
    <div className='middle'><div className='middle-top'><h1>Search properties to rent</h1>
      <input type="text" placeholder='Search with Search Bar' /></div>
    </div>
    <div className="container">
        <div>
          <label>Location</label>
          <SelectComponent arr={location} state={Location} type={'location'} />
        </div>
        <div className="vl"></div>
        <div>
          <label>When </label>
          <input type="date" placeholder='Enter date' onChange={handleDate} />
        </div>
        <div className="vl"></div>
        <div>
          <label style={{ zIndex: '1' }}>Price</label>
          <div className="wrapper">
            <div className="price-input">
              <div className="field">
                <span >$</span>
                <input id='from' type="number" className="input-min" placeholder='from...' min='0' onChange={handleFromInput} />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <span >$</span>
                <input id='to' type="number" className="input-max" placeholder='to...' min={from} onChange={handleToInput} />
              </div>
            </div>
          </div>
        </div>
        <div className="vl"></div>
        <div>
          <label>Property Type</label>
          <SelectComponent arr={property_type} state={propertyType} type={'property'} />
        </div>
        <div className="vl"></div>
        <div>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div></>
  }

  
  
  
  
  
  
  
  
  function Bottom() {

    
    
    
    function Card(props) {
      
      return <div id={props.id} className='card'>
           <img src={props.url} alt="" className='card__image' />
           <div className='card__content'>
            <h3 className='color-purple'>{props.price}
            <span className='month-style'>/month</span>
            <i class="fa-regular fa-heart heart"></i></h3>
          <h2>{props.name}</h2>
          <p>{props.address}</p>
          <hr
            style={{ backgroundColor: '#e6e5e9' }}
          />
          <div className='card__info'>
            <div><i class="fa-solid fa-bed color-purple"></i><span>  {props.beds} Beds</span></div>
            <div><i class="fa-solid fa-toilet color-purple"></i><span>  {props.bathroom} Bathrooms</span></div>
            <div><i class="fa-solid fa-square color-purple"></i><span>  {props.area} m<sup>2</sup></span></div>
          </div>
        </div>
      </div>;

    }

    
    
    return <div className='cards'>
      {cards.map((val) => {
        return <Card
          id={val.id}
          url={val.url}
          price={val.price}
          name={val.name}
          address={val.address}
          beds={val.beds}
          bathroom={val.bathroom}
          area={val.area} />
      })}
    </div>;
  }



  return (<>
    <Header />
    <Middle/>
    <Bottom />
  </>
  );
}

export default App;
