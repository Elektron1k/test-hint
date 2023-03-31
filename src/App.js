import './App.css';

function App() {
  const hint = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    [true, 'first task', 'second task'],
    [false, 'first task', 'second task'],
    'Text with link. &&&It is link&&https://www.google.com/&&& Text after link ',
  ];

  const forString = (el) => {
    const indexStartTextOfLink = el.indexOf('&&&');
    if (indexStartTextOfLink === -1) {
      return <p>{el}</p>;
    } else {
      return forLink(el);
    }
  };

  const forLink = (el) => {
    const indexStartTextOfLink = el.indexOf('&&&');

    const indexEndTextOfLink = el.indexOf('&&', indexStartTextOfLink + 2);
    const indexEndOfLink = el.indexOf('&&&', indexEndTextOfLink + 1);
    const textOfLink = el.slice(indexStartTextOfLink + 3, indexEndTextOfLink);
    const link = el.slice(indexStartTextOfLink + 3, indexEndOfLink);

    return (
      <p>
        {el.slice(0, indexStartTextOfLink)}
        <a href={link}>{textOfLink}</a>
      </p>
    );
  };

  const forArray = (el) => {
    return <p>Array</p>;
  };

  return (
    <div className="App">
      {hint.map((el) => {
        if (el !== null && typeof el === 'object') {
          return forArray(el);
        } else {
          return forString(el);
        }
      })}
    </div>
  );
}

export default App;
