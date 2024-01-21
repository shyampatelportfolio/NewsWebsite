import './Css/Css1.css'
import './Css/Navbar.css'
import './Css/Footer.css'
import './Css/Compose.css'
import './Css/Article.css'
import './Css/Misc.css'
import './Css/Stories.css'





import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import Article from './Pages/Article'
import Category from './Pages/Category'
import Compose from './Pages/Compose'
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar';
import PageNotFound from './Components/PageNotFound'
import { ActionProvider } from './Context/ActionsContext'
import ArticleSubmitRedirect from './Pages/ArticleSubmitRedirect'





function App() {

  return (
    <>
        <ActionProvider>

      <NavBar color={'black'}></NavBar> 
    
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Article/:id' element={<Article></Article>}></Route>

        <Route path='/Article' element={<Article></Article>}></Route>
        <Route path='/Category/:id' element={<Category></Category>}></Route>

        <Route path='/Category' element={<Category></Category>}></Route>
        <Route path='/Compose' element={<Compose></Compose>}></Route>
        <Route path='/ArticleSubmitting' element={<ArticleSubmitRedirect></ArticleSubmitRedirect>}></Route>
        <Route path='/NotFound' element={<PageNotFound></PageNotFound>}></Route>
        
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>



      </Routes>
      <Footer></Footer>
      </ActionProvider>

    </>
  )
}

export default App
