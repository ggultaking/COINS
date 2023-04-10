import React from 'react';
import './MainPage.css';
import Homepage from '../../components/Homepage/Homepage';


const MainPage =()=> {

        return (
            <div className="main-page">
          
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__homepage">
                            <Homepage/>
                        </div>
                
                    </section>
                  
                </main>
            </div>
        );
    }

 
export default MainPage;