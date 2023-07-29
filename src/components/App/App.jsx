import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import { mainApi } from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import { setToLocalStorage, getFromLocalStorage } from '../../utils/helpers';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(
    false || getFromLocalStorage('jwt')
  );
  const [savedCards, setSavedCards] = React.useState(
    getFromLocalStorage('savedCards') || []
  );
  const navigate = useNavigate();

  const [success, setSuccess] = React.useState(false);
  const [cardList, setCardList] = React.useState(
    getFromLocalStorage('mineMovies') || []
  );
  const [isCardsLoading, setIsCardsLoading] = React.useState(false);
  const [movieFilter, setMovieFilter] = React.useState(
    false || getFromLocalStorage('checkedButton')
  );

  React.useEffect(() => {
    const jwt = getFromLocalStorage('jwt');
    if (jwt) {
      setIsCardsLoading(true);
      setLoggedIn(true);
      auth
        .checkToken(jwt)
        .then(() => {
          setLoggedIn(true);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          setIsCardsLoading(false);
        });
    }
  }, []);

  React.useEffect(() => {
    const jwt = getFromLocalStorage('jwt');
    if (loggedIn) {
      mainApi
        .getUser(jwt)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((error) => {
          console.log(`Что-то пошло не так...(${error})`);
        });
      mainApi
        .getSavedCard(jwt)
        .then((data) => {
          setSavedCards(data);
          localStorage.setItem('mineSavedMovies', JSON.stringify(data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loggedIn]);

  const handleLogin = ({ email, password }) => {
    setIsCardsLoading(true);
    auth
      .authorize({ email, password })
      .then((data) => {
        if (data) {
          setToLocalStorage('jwt', data.token);
          setLoggedIn(true);
          navigate('/movies', { replace: true });
        }
      })
      .catch((e) => {
        console.error(e);
        setSuccess(false);
      })
      .finally(() => {
        setIsCardsLoading(false);
      });
  };

  const handleRegistration = ({ name, email, password }) => {
    auth
      .register(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch((e) => {
        console.error(e);
        setSuccess(false);
      });
  };

  const handleUpdateUser = (data) => {
    const jwt = getFromLocalStorage('jwt');
    mainApi
      .editUser(data, jwt)
      .then(() => {
        setCurrentUser({ currentUser, name: data.name, email: data.email });
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
      });
  };

  const handleSaveCard = (data) => {
    const jwt = getFromLocalStorage('jwt');
    mainApi
      .savedCard(data, jwt)
      .then((response) => {
        setSavedCards([...savedCards, response]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/', { replace: true });
    setLoggedIn(false);
    window.location.reload();
  };

  const handleDeleteCard = (id) => {
    const jwt = getFromLocalStorage('jwt');
    const searchCard = getFromLocalStorage('mineSavedMovies');
    mainApi
      .deleteCard(id, jwt)
      .then(() => {
        const updateCardList = savedCards.filter((card) => card._id !== id);
        setSavedCards(updateCardList);
        if (searchCard) {
          const updateSeach = searchCard.filter((card) => card._id !== id);

          setToLocalStorage('searchMovies', updateSeach);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='app'>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header loggedIn={loggedIn} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                savedCards={savedCards}
                onCardSave={handleSaveCard}
                cardList={cardList}
                setCardList={setCardList}
                handleDeleteCard={handleDeleteCard}
                movieFilter={movieFilter}
                setMovieFilter={setMovieFilter}
                isCardsLoading={isCardsLoading}
                setIsCardsLoading={setIsCardsLoading}
              ></ProtectedRoute>
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                savedMovies={savedCards}
                setSavedMovies={setSavedCards}
                onCardDelete={handleDeleteCard}
                movieFilter={movieFilter}
                setCardList={setCardList}
                setMovieFilter={setMovieFilter}
                isCardsLoading={isCardsLoading}
                setIsCardsLoading={setIsCardsLoading}
              ></ProtectedRoute>
            }
          />
          <Route
            path='/signup'
            element={
              <Register onRegister={handleRegistration} loggedIn={loggedIn} />
            }
          />
          <Route
            path='/signin'
            element={<Login onLogin={handleLogin} loggedIn={loggedIn} />}
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                updateUser={handleUpdateUser}
                success={success}
                logout={handleLogout}
              />
            }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
