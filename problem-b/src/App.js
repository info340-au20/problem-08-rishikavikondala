import React, { useState } from 'react';

import './style.css';

export function App(props) {
  const[pets, setPets] = useState(props.pets);
  const handleAdopt = function(name) {
    let updatedPets = pets.map((pet) => {
      if(pet.name === name) {
        pet.adopted = true;
      }
      return pet;
    })
    setPets(updatedPets);
  }
  return (
    <div>
      <HeaderSection/>,
      <MainSection pets={props.pets} adoptCallback={handleAdopt}/>,
      <FooterSection/>
    </div>
  );
}

export function HeaderSection() {
  return (
    <header className="jumbotron jumbotron-fluid py-4">
      <div className="container">
        <h1>Adopt a Pet</h1>
      </div>
    </header>
  )
}

export function MainSection(props) {
  let breeds = ["Breed A", "Breed B"];
  return (
    <main className="container">
      <div className="row">
        <div id="navs" className="col-3">
          <BreedNav breeds={breeds}/>

          <AboutNav/>
        </div>

        <PetList pets={props.pets} adoptCallback={props.adoptCallback}/>

      </div>
    </main>
  )
}

export function FooterSection() {
  return (
    <footer className="container">
      <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
    </footer>
  )
}

export function AboutNav() {
  return (
    <nav id="aboutLinks">
      <h2>About</h2>
      <ul className="list-unstyled">
        <li><a href="#/">How to Adopt</a></li>
        <li><a href="#/">Volunteering</a></li>
        <li><a href="#/">Events</a></li>
        <li><a href="#/">Donate</a></li>
        <li><a href="#/">About Us</a></li>
      </ul>
    </nav>
  )
}

export function BreedNav(props) {
  let breeds = props.breeds;
  let breedList = breeds.map((breed) => {
    let thisBreed = <li><a key={breed} href={breed}>{breed}</a></li>
    return thisBreed;
  })
  return (
    <nav id="breedLinks">
      <h2>Pick a Breed</h2>
      <ul className="list-unstyled">
        {breedList}
      </ul>
    </nav>
  )
}

export function PetCard(props) {
  let petCard = props.petCard;
  let petName = petCard.name;
  let petImage = petCard.img;
  let petGenderBreed = petCard.sex + " " + petCard.breed;
  const handleClick = () => {props.adoptCallback(petName)};
  if(petCard.adopted) {
    petName = petName + " (Adopted)";
  }
  return (
    <div className="card" onClick={handleClick}>
      <img className="card-img-top" src={petImage} alt={petName} />
      <div className="card-body">
        <h3 className="card-title">{petName}</h3>
        <p className="card-text">{petGenderBreed}</p>
      </div>
    </div>
  )
}

export function PetList(props) {
  let petsArray = props.pets;
  let petsList = petsArray.map((pet) => {
    let thisPet = <PetCard petCard={pet} adoptCallback={props.adoptCallback}/>
    return thisPet;
  })
  return (
    <div id="petList" className="col-9">
      <h2>Dogs for Adoption</h2>
      {petsList}
    </div>
  )
}

export default App;