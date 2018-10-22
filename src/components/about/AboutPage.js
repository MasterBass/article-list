import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About Page</h1>
                
                    <div className="text">
                        <p>
                            Необходимо создать мини-блог со списком статей, где можно кликнуть на статью и посмотреть её отдельно. 
                            Сверху на странице списка статей сделать инпут с поиском по заголовкам и тексту.
                        </p>
                        <div>
                            <strong>На странице поста должно присутствовать следующее :</strong>
                            <ul>
                                <li>Информация о юзере, который создал эту статью</li>
                                <li>Список комментариев к этой статье</li>
                            </ul>                       
                        </div>
                        <div>
                            <strong>Обязательный стек технологий:</strong>  
                            <ul>
                                <li>React 16</li>
                                <li>Redux</li>
                                <li>Redux-saga</li>
                                <li>React Router 4</li>
                                <li>Webpack</li>
                            </ul>
                            <strong>Не использовать готовые библиотеки UI.</strong>
                        </div>
                        <div>
                            <strong>Бонусные баллы:</strong>
                            <ul>
                                <li>Реализовать code splitting (подгрузка файла модуля только когда зайдем на страницу, где он используется)</li>
                                <li>Возможность добавить собственный коммент, который будет храниться в localStorage и будет сохраняться после перезагрузки страницы.</li>
                            </ul>
                        </div>
                        <p>
                            Исходный код должен быть загружен в публичный репозиторий (github или bitbucket). <br/>
                            Также должно быть доступно публичное демо на любом бесплатном хостинге.<br/>
                            Все необходимые моки найдете <a href="https://jsonplaceholder.typicode.com">здесь</a> .
                        </p>
                    </div>                        

                <Link to="home">Go to home page</Link>

            </div>
        );
    }
}
export default AboutPage;