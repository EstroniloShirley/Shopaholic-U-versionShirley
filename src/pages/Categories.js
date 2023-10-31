import { Card } from 'react';

export const Categories = () => {
  class Categories extends Card {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
      };
    }
    componentDidMount() {
      fetch('https://api.escuelajs.co/api/v1/categories')
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            isLoaded: true,
            items: json,
          });
        });
    }

    render() {
      let { isLoaded, items } = this.state;

      if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <main>
            <div className="Categories">
              <ul>
                {items.map((item) => (
                  <li key={item.id}>
                    Name: {item.name} | Image: {item.image}
                  </li>
                ))}
              </ul>
            </div>
          </main>
        );
      }
    }
  }
};
