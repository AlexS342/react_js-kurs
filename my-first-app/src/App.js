import './App.css';                                                             //импортируем App.css
import './StyleApp.css';

function App() {                                                                //Создаем функцию App()

  const newMessage = 'Грызёшь гранит науки как будто зубы не свои!!!';          //Создаем константу newMessage с данными
  const user1 = 'Василий';
  return (                                                                      //Функция возврощает все, что в скобках
    //Основной div className="App", может быть только один
    //className="App" указывает стили из подключенного css файла
    //Теги <header>, <p>, <h3> тоже самое, что и в HTML 
    <div className="App">
      <header className="App-header">
        <p>Все ровно я в этом разберусь!</p>
        <p>Привет всем!!!</p>
        <Message newMess={newMessage} user={user1} />
        <h3>О да!!! Я сделал </h3>
      </header>
    </div>
  );
}

const Message = (props) => {                                                    //компонент Message, его можно вставлять в function App(),
  //props - это данные принимае из стороки <Message newMess={newMessage} user={user1} />
  //Способы диструкторизации props
  //const Message = ({newMes, user}) => {
  //Тогда {props.user} и {props.newMess} можно писать {user} и {newMess}
  return (                                                                      //компанент возврощает все, что в скобках будет вставлено место него
    <div className='oneMes'>
      <p className='oneMes-user'>{props.user}: </p>
      <p className='oneMes-text'>{props.newMess}</p>
    </div>
  )
}

export default App;                                                             //Разрешаем экспорт функции App() 

