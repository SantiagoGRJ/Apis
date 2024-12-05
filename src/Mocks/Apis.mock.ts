

import pokemonImage from "../assets/img/pokeapi.png";
import rickyImage from "../assets/img/ricky.png";
import storeImage from "../assets/img/store.png";
import { IApiMock } from "../models/apis.interface";

export const apis : IApiMock[] =  [
    {
      id: 1,
      name: "API de Pokemon",
      description: "Accede a datos de Pokemones.",
      image:pokemonImage,
      link: "/pokemon",
    },
    {
      id: 2,
      name: "API de Store",
      description: "Información sobre productos.",
      image:storeImage,
      link: "/store",
    },
    {
      id: 3,
      name: "API de Ricky And Morty",
      description: "Observar Personajes de Rick And Morty.",
      image:rickyImage,
      link: "/Ricky",
    },
    
  ]