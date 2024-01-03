import React from 'react';

class Content extends React.Component {
    constructor() {
      super();
      this.state = {
        element2Clicked: false,
        element3Clicked: false,
      };
    }
  
    changeColor = (elementId) => {
      this.setState((prevState) => ({
        element2Clicked: elementId === 'element2' ? !prevState.element2Clicked : prevState.element2Clicked,
        element3Clicked: elementId === 'element3' ? !prevState.element3Clicked : prevState.element3Clicked,
      }));
    };
  
    render() {
      const { element2Clicked, element3Clicked } = this.state;
  
      return (
        <div>
          <p>Хобі:</p>
          <ul>
            <li
            id="element2"
            className={`element ${element2Clicked ? 'clicked2' : 'clicked3'}`}
            onClick={() => this.changeColor('element2')}
            >
                Гра в шахи
            </li>
            <li
            id="element3"
            className={`element ${element3Clicked ? 'clicked3' : 'clicked2'}`}
            onClick={() => this.changeColor('element3')}
            >
                Перегляд фільмів
            </li>
            <li>Читання манги</li>
          </ul>
  
          <p>Улюблені книги:</p>
          <ol>
            <li> Последний эльф. Во власти девантара</li>
            <li> Вбивство в східному експресі</li>
            <li> Хроники Азура. Огненная сага</li>
          </ol>
  
          <p>Моїм улюбленим містом є Прага. Воно чарує своєю архітектурою та історією.</p>
        </div>
      );
    }
}

export default Content