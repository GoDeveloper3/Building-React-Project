import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import "../../CSS/FilterModal.css";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";

const FilterModal = ({ selectedFilters, onFilterChange, onClose }) => {
  const [priceRange, setPriceRange] = useState({
    min: selectedFilters.priceRange?.min || 600,
    max: selectedFilters.priceRange?.max || 30000,
  });

  const [propertyType, setPropertyType] = useState(
    selectedFilters.propertyType || ""
  );

  const [roomType, setRoomType] = useState(selectedFilters.roomType || "");
  const [aminities, setAminities] = useState(selectedFilters.aminities || []);

  useEffect(() => {
    setPriceRange({
      min: selectedFilters.priceRange?.min || 600,
      max: selectedFilters.priceRange?.max || 30000,
    });
    setPropertyType(selectedFilters.propertyType || "");
    setRoomType(selectedFilters.roomType || "");
    setAminities(selectedFilters.aminities || []);
  }, [selectedFilters]);

  // function to handle the changes in price range
  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  // function to handle the min value
  const handleMinInputChange = (e) => {
    const minValue = parseInt(e.target.value, 10);
    setPriceRange((prevRange) => ({ ...prevRange, min: minValue }));
  };

  //function to handle the max value
  const handleMaxInputChange = (e) => {
    const maxValue = parseInt(e.target.value, 10);
    setPriceRange((prevRange) => ({ ...prevRange, max: maxValue }));
  };

  const handleFilterChange = () => {
    onFilterChange("minPrice", priceRange.min);
    onFilterChange("maxPrice", priceRange.max);
    onFilterChange("propertyType", propertyType);
    onFilterChange("roomType", roomType);
    onFilterChange("aminities", aminities);
    onClose();
  };

  // options for property types

  const propertyTypeOptions = [
    { value: "House", label: "House", icon: "home" },
    { value: "Flat", label: "Flat", icon: "apartment" },
    { value: "Guest House", label: "Guest House", icon: "hotel" },
    { value: "Hotel", label: "Hotel", icon: "meeting_room" },
  ];

  //options for room types
  const roomTypeOptions = [
    { value: "Entire Room", label: "Entire Room", icon: "hotel" },
    { value: "Room", label: "Room", icon: "meeting_room" },
    { value: "AnyType", label: "AnyType", icon: "apartment" },
  ];

  //options for aminities

  const aminitiesOptions = [
    { value: "Wifi", label: "Wifi", icon: "wifi" },
    { value: "Kitchen", label: "Kitchen", icon: "kitchen" },
    { value: "Ac", label: "AC", icon: "ac_unit" },
    {
      value: "Washing Machine",
      label: "Washing Machine",
      icon: "local_laundry_service",
    },
    { value: "TV", label: "TV", icon: "tv" },
    { value: "Pool", label: "Pool", icon: "pool" },
    { value: "Free Parking", label: "Free Parking", icon: "local_parking" },
  ];

  const handleClearFilter = () => {
    setPriceRange({ min: 600, max: 30000 });
    setPropertyType("");
    setRoomType("");
    setAminities([]);
  };

  const handleAminitiesChange = (selectedAminity) => {
    setAminities((prevAminities) =>
      prevAminities.includes(selectedAminity)
        ? prevAminities.filter((item) => item !== selectedAminity)
        : [...prevAminities, selectedAminity]
    );
  };

  // function to handle the property type change
  const handlePropertyTypeChange = (selectedType) => {
    setPropertyType((prevType) =>
      prevType === selectedType ? "" : selectedType
    );
  };

  const handleRoomTypeChange = (selectedType) => {
    setRoomType((prevType) => (prevType === selectedType ? "" : selectedType));
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h4>
          Filter <hr />
        </h4>
        <button className="close-button" onClick={onClose}>
          <span>&times;</span>
        </button>

        {/* onclose button */}
        <div className="modal-filters-container">
          <div className="filter-section">
            <label>Price Range:</label>
            <InputRange
              minValue={600}
              maxValue={30000}
              value={priceRange}
              onChange={handlePriceRangeChange}
            />
            <div className="range-inputs">
              <input
                type="number"
                value={priceRange.min}
                onChange={handleMinInputChange}
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange.max}
                onChange={handleMaxInputChange}
              />
            </div>
          </div>
          {/* property type filter */}
          <div className="filter-section">
            <label>Propert Type:</label>
            <div className="icon-box">
              {propertyTypeOptions.map((type) => (
                <div
                  key={type.value}
                  className={`selectable-box ${
                    propertyType === type.value ? "selected" : ""
                  }`}
                  onClick={() => handlePropertyTypeChange(type.value)}
                >
                  <span className="material-icons">{type.icon}</span>
                  <span>{type.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Room type filter */}
          <div className="filter-section">
            <label>Room Type:</label>
            <div className="icon-box">
              {roomTypeOptions.map((type) => (
                <div
                  key={type.value}
                  className={`selectable-box ${
                    roomType === type.value ? "selected" : ""
                  }`}
                  onClick={() => handleRoomTypeChange(type.value)}
                >
                  <span className="material-icons">{type.icon}</span>
                  <span>{type.label}</span>
                </div>
              ))}
            </div>
          </div>
                
          {/* Aminities filter */}

          <div className="filter-section">
             <label>Aminities:</label>
             <div className="amenities-checkboxes">
              {aminitiesOptions.map((option) => (
                <div key={option.value} className="amenity-checkbox">
                   {/* {console.log(aminities.includes(option.value))} */}
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={aminities.includes(option.value)}
                    onChange={() => handleAminitiesChange(option.value)}/>
                  <span className="material-icons amenitieslabel">
                    {option.icon}</span>
                    <span>{option.label}</span>
                </div>
              ))}
             </div>
           </div>
            
            {/* clear filter button */}
            <div className="filter-buttons">
             <button className="clear-button" onClick={handleClearFilter}
             > {" "}
               Clear
             </button>
             <button  onClick={handleFilterChange}>
              Apply Filter
              </button>
            </div>
           
        </div>
      </div>
    </div>
  );
};


  FilterModal.propTypes={
    selectedFilters:PropTypes.object.isRequired,
    onFilterChange:PropTypes.func.isRequired,
    onClose:PropTypes.func.isRequired
  }
export default FilterModal;
