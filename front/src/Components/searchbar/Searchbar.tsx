import React, { useRef } from "react";
import Select, { SingleValue } from 'react-select';
import "./searchbar.css";
import { useState, useEffect } from "react";
import apiService from "../../apiService.js";
import Loading from "../loading/Loading";
import { AiOutlineSearch } from "react-icons/ai";
import { Country } from "../cards/Cards";
import { TravelType } from '../details/TravelDetail';


type SearchbarProps = {
  setDestination: (countryOption?: Country) => void;
  setCategory: (categoryOption?: TravelType) => void;
  setProfil: (profilOption?: string) => void;
}

export type CountryOption = {
  nameEn: string;
  nameFr: string;
  id: number;
}

export type CategoryOption = {
  categoryFr: string;
  categoryEn: string;
  id: number;

}

export type ProfilOption = {
  username: string;
}

const Searchbar = ({ setDestination, setCategory, setProfil }: SearchbarProps) => {
  const [countriesDatas, setCountriesDatas] = useState([]);
  const [categoriesDatas, setCategoriesDatas] = useState([]);
  const [profilsDatas, setProfilsDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  const tempCountryValue = useRef<Country>();  // = un objet, donc on manipule tempCountryValue.current
  const tempCategoryValue = useRef<TravelType>();
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
      return { value: data.id, label: data.nameFr};
      // return { value: data.id, label: data.nameFr };
    })

  const categoryOptions =
    categoriesDatas.map((data: CategoryOption) => {
      return { value: data.id, label: data.categoryFr };
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
  if (newValue !== null) {
    tempCountryValue.current = {
      id: newValue.value, 
      nameFr: newValue.label,
      nameEn: newValue.label,
    }
  } else {
    tempCountryValue.current = undefined; // Réinitialiser si la sélection est retirée
    setDestination(undefined); // Réinitialiser la valeur dans le composant parent
  }
 }
  
  const handleCategoryChange = (newValue: SingleValue<{
  value: number;
  label: string;
}>) => {
  if (newValue !== null) {
    tempCategoryValue.current = {
      id: newValue.value, 
      categoryFr: newValue.label,
      categoryEn: newValue.label,
    }
  } else {
    tempCategoryValue.current = undefined; // Réinitialiser si la sélection est retirée
    setCategory(undefined); // Réinitialiser la valeur dans le composant parent
  }
}

  const handleProfilChange = (newValue: SingleValue<{
  value: string;
  label: string;
}>) => {
  tempProfilValue.current = newValue?.label;

  if (newValue !== null) {
    tempProfilValue.current = newValue.label;
  } else {
    tempProfilValue.current = undefined; // Réinitialiser si la sélection est retirée
    setProfil(undefined); // Réinitialiser la valeur dans le composant parent
  }
}

  if (loading) {
    return <div>
      <Loading />
    </div>
  }

  return (
    <>
      <form className="form-search" onSubmit={handleSearch} data-testid="searchbar-component">
        <div className='select'>
          <div className="search-bar search-bar-radius-left">
            <Select
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: '#DDBEA8;',
                  primary: '#05668D',
                },
              })}
              options={countryOptions}
              defaultValue={{ value: 1, label: 'Destinations' }}
              name="country"
              onChange={handleDestinationChange}
              isClearable={true}
            />
          </div>
          <div className="search-bar">
            <hr className="line-search-bar line-search-bar-left" />
            <Select
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: '#DDBEA8;',
                  primary: '#05668D',
                },
              })}
              options={categoryOptions}
              defaultValue={{ value: 1, label: 'Catégories' }}
              name="category"
              onChange={handleCategoryChange}
              isClearable={true}
            />
            <hr className="line-search-bar line-search-bar-right" />
          </div >
          <div className="search-bar search-bar-radius-rigth">
            <Select
              theme={(theme) => ({
                ...theme,
                colors: {
                  ...theme.colors,
                  primary25: '#DDBEA8;',
                  primary: '#05668D',
                },
              })}
              options={profilOptions}
              defaultValue={{ value: 'Profil', label: 'Profil' }}
              name="profil"
              onChange={handleProfilChange}
              isClearable={true}
            />
          </div >

        </div >
        <div>
          <button className="search-button" role="search" type="submit">
            <AiOutlineSearch />
          </button>
        </div>
      </form >

    </>
  );
}

export default Searchbar;
