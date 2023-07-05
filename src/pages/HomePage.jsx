import React from 'react'
import '../styles/mainPage.scss'
import cakeImage from '../assets/cake-svgrepo-com.svg'

export default function HomePage() {
  return (
    <section>
      <div className="container">
        <div className="flex">
          <div className="media">
            <img className="image" src={cakeImage} alt="Cake" />
          </div>
          <div className="content">
            <p>
              Avez-vous jamais commencé par regarder la carte des desserts dans le menu d’un restaurant, avant même l’apéritif ou le reste de la carte ?
              <br />
              Si c’est le cas, vous n’êtes pas seul ! 
              <br />
            </p>
            <div className="link">
              <a href="/register">LET'S GO</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-content">
        <p>
          En effet, le dessert est, pour certains, un élément majeur du repas et donc du choix du restaurant.
          À partir de ce constat, l’idée était de concevoir et développer une application pour téléphone mobile qui permettrait à ses utilisateurs de connaître les desserts que proposent les restaurants, avant même d’avoir choisi celui dans lequel ils iraient manger !
          <br />
          Comment ?
          <br />
          Pour arriver à cela, l’utilisateur du service doit avoir accès à une liste de restaurants et, pour chacun, la liste des desserts disponibles. 
          <br />
          Pour chaque dessert, l’utilisateur devra pouvoir consulter les avis des autres utilisateurs de l’application pour ce dessert précis, dans cet établissement précis.
          Les « avis » devront comporter un système de notation, un court texte et éventuellement une ou plusieurs photos, ainsi que le pseudo de l’utilisateur qui l’a posté.
          <br />
          L’application doit proposer un légère dimension « sociale ». Il faudrait permettre à un utilisateur d’en « suivre » un ou plusieurs autres. Cette fonctionnalité permettrait à chacun de choisir ses desserts d’après l’avis des gens qui ont des goûts proches des siens.
        </p>
        </div>
      </div>
    </section>
  )
}
