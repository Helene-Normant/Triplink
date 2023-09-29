// import Dropdown from "react-dropdown";
import React, { useRef } from "react";
import "react-dropdown/style.css";
import Select, { SingleValue } from 'react-select';
import "./searchbar.css";
import { useState, useEffect } from "react";
import apiService from "../../apiService.js";
import Loading from "../loading/Loading";
import Button from "../button/Button";

type SearchbarProps = {
  setDestination: (countryOption?: string) => void;
  setCategory: (categoryOption?: string) => void;
  setProfil: (profilOption?: string) => void;
}

export type CountryOption = {
  nameEn: string;
  nameFr: string;
  id: number;
}

export type CategoryOption = {
  categoryFr: string;
}

export type ProfilOption = {
  username: string;
}

const Searchbar = ({ setDestination, setCategory, setProfil }: SearchbarProps) => {
  const [countriesDatas, setCountriesDatas] = useState([]);
  const [categoriesDatas, setCategoriesDatas] = useState([]);
  const [profilsDatas, setProfilsDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const tempCountryValue = useRef<string>();  // = un objet, donc on manipule tempValue.current
  const tempCategoryValue = useRef<string>();
  const tempProfilValue = useRef<string>();

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const countriesData = await apiService.Countries.getAll();
      setCountriesDatas(countriesData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const countriesData = await apiService.Categories.getAll();
      setCategoriesDatas(countriesData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchProfils = async () => {
    try {
      setLoading(true);
      const countriesData = await apiService.User.getAll();
      setProfilsDatas(countriesData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
    fetchCategories();
    fetchProfils();
  }, []);

  const countryOptions =
    countriesDatas.map((data: CountryOption) => {
      return { value: data.id, label: data.nameEn };
      // return { value: data.id, label: data.nameFr };
    })

  const categoryOptions =
    categoriesDatas.map((data: CategoryOption) => {
      return { value: data.categoryFr, label: data.categoryFr };
    })

  const profilOptions =
    profilsDatas.map((data: ProfilOption) => {
      return { value: data.username, label: data.username };
    })

  const handleSearch = (event: any) => {
    event.preventDefault();

    setDestination(tempCountryValue.current);
    setCategory(tempCategoryValue.current);
    setProfil(tempProfilValue.current);
  }

  const handleDestinationChange = (newValue: SingleValue<{
    value: number;
    label: string;
  }>) => {
    tempCountryValue.current = newValue?.label;
    // tempValue.current = newValue?.id;
  }

  const handleCategoryChange = (newValue: SingleValue<{
    value: string;
    label: string;
  }>) => {
    tempCategoryValue.current = newValue?.label;
  }

  const handleProfilChange = (newValue: SingleValue<{
    value: string;
    label: string;
  }>) => {
    tempProfilValue.current = newValue?.label;
  }

  if (loading) {
    return <div>
      <Loading />
    </div>
  }

  return (
    <>
      <form className="form" onSubmit={handleSearch}>
        <div className='select'>
          <div className="search-bar search-bar-radius-left">
            <p className="search-name">Destination</p>
            <Select
              options={countryOptions}
              defaultValue={{ value: 1, label: 'Rechercher une destination' }}
              name="country"
              onChange={handleDestinationChange}
              isClearable={true}
            />
          </div>
          <div className="search-bar">
            <hr className="line-search-bar line-search-bar-left" />
            <p className="search-name">Catégorie</p>
            <Select
              options={categoryOptions}
              defaultValue={{ value: 'Catégorie', label: 'Rechercher une catégorie' }}
              name="category"
              onChange={handleCategoryChange}
              isClearable={true}
            />
            <hr className="line-search-bar line-search-bar-right" />
          </div>
          <div className="search-bar search-bar-radius-rigth">
            <p className="search-name">Profil</p>
            <Select
              options={profilOptions}
              defaultValue={{ value: 'Profil', label: 'Rechercher un profil' }}
              name="profil"
              onChange={handleProfilChange}
              isClearable={true}
            />
          </div>

        </div>
        <div className="search-button">
          <Button className="light" children="Rechercher" role="annule" type="submit" />
        </div>
      </form>

      {/* <div className="searchBar">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Rechercher"
          onChange={handleSearchTerm}
        />
      </div> */}
      {/* <div className="search__results">
        {datas
          .filter((value) => {
            return value.title.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .map((value) => {
            return (
              <div className="search__result" key={value.id}>
                {value.title}
              </div>
            );
          })}
      </div> */}
    </>
  );
}

export default Searchbar;
