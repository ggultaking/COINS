import React from 'react';
import './MainPage.css';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Coins/Coins';


const MainPage =()=> {

        return (
            <div className="main-page">
          
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox />
                        </div>
                        <div className="main-page__movies">
                            <Movies />
                        </div>
                    </section>
                  
                </main>
            </div>
        );
    }

 
export default MainPage;